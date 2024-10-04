const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  const MONGO_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGO_URI
  : process.env.MONGO_URI
  const maxRetries = 5;
  let attempts = 0;

  while (attempts < maxRetries) {
    try {
      const conn = await mongoose.connect(MONGO_URI || "mongodb://localhost:27017/web-dev");
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return; // Exit the function if connected successfully
    } catch (error) {
      attempts++;
      console.error(`MongoDB connection attempt ${attempts} failed: ${error.message}`);
      if (attempts >= maxRetries) {
        console.error("Maximum connection attempts reached. Exiting...");
        process.exit(1);
      }
      await new Promise(res => setTimeout(res, 5000)); // Wait 5 seconds before retrying
    }
  }
};

module.exports = connectDB;