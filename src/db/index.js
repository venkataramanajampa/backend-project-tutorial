import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MANGO_URI}/${DB_Name}`
    );
    console.log(
      `mango db is successfully connected !! dbhost :: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
