import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server listening at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("mango db connection failed !!!!", error);
  });

// (async () => {
//   try {
//     mongoose.connect(`${process.env.MANGO_URI}/${DB_Name}`);
//   } catch (error) {
//     console.log(error);
//   }
// })();
