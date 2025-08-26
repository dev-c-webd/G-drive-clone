import mongoose from "mongoose";

function connectDb() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("connected to db");
    });
}

export default connectDb; 