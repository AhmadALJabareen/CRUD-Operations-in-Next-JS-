import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI).
            then(() => {
                console.log("database connected 🫡👍")
            })
            .catch((err) => {
                console.log(err)
            })
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;