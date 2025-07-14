import mongoose, { Schema } from "mongoose"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    },
}, { timestamps: true })
 

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) next();

    this.password = await bcryptjs.hash(this.password, 10);
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcryptjs.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      role: this.role
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d"
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "15d"
    }
  );
};

export const User = mongoose.model("User", userSchema);