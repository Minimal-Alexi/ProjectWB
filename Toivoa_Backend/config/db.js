const mongoose = require("mongoose");
require('dotenv').config();

/* const connectDB = async () => {
  const maxRetries = 5;
  let attempts = 0;

  while (attempts < maxRetries) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/web-dev");
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

const testInsert = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/web-dev");
    const Users = require('../Models/userModel');
    const newUser = new Users({
      username:"gbond0",
      email:"gbond0@jimdo.com",
      firstName:"Grady",
      lastName:"Bond",
      password:"yF5.GpVsQhx,$s\\b",
      passwordSalt:"yF5.GpVsQhx,$s\\b",
      accountType: 2,
      countryCode:"ID"
    });

    await newUser.save();
    console.log("User inserted successfully");
  } catch (error) {
    console.error("Failed to insert user:", error.message);
  } finally {
    mongoose.disconnect();
  }
};

testInsert();
 */

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/web-dev");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


module.exports = connectDB;