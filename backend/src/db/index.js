import mongoose from "mongoose"

const connectToDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Mongo Db Connection Successfull");
    } catch (error) {
        console.log("Mongo db connection failed", error);
        process.exit(1);
    }
}

export default connectToDb