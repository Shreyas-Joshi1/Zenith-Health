import dotenv from "dotenv"
import { app } from "./app.js"
import connectToDb from "./db/index.js"

dotenv.config();

connectToDb()
.then(() => {
    app.on("Error", () => {
        console.log("Error in communication between server and Db");
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log("Server running at port", process.env.PORT);
    })
    
})
.catch((error) => {
    console.log("Connection failed at index.js", error);
})