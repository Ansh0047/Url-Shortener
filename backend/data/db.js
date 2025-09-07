import mongoose from "mongoose";

export const connectDb = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to mongodb succesfully"))
    .catch((err) => console.log(err));
}