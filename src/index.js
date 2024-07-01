import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
  path: "./env",
});

connectDB();
// (async () => {
//   try {
//     mongoose.connect(`${process.env.MANGO_URI}/${DB_Name}`);
//   } catch (error) {
//     console.log(error);
//   }
// })();
