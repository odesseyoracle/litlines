import "./config.js";

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("📖 DB is connected 🌳");
  } catch (error) {
    console.log("db-connection: ", error);
  }
};

connectDb();
