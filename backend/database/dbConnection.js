import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {dbName: "cortex"}).then(() => {
        console.log("Connected to DB");
    }).catch(err=> {
        console.log("Something went wrong.", err)
    })
}