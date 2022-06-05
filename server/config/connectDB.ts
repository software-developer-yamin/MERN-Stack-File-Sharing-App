import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://yamin:01880279@cluster0.iqce5.mongodb.net/?retryWrites=true");
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
