import express from "express";
import dotevn from "dotenv";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./config/connectDB";
import filesRoute from "./routes/filesRoute";

// app
const app = express();

// config
dotevn.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})
 
// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/files", filesRoute);

// sever listen
app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
