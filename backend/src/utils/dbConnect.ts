import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGOBD_URI}/todoapp`
    );
    console.log(
      `\n MongoDB connected !!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;
