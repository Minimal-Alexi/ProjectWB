const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const logger = require("./Middleware/logger");
const { unknownEndpoint, errorHandler } = require("./Middleware/errorHandling");

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

connectDB();

// Routes
const userRouter = require("./Router/userRouter");
const productRouter = require("./Router/productRouter");
const orderRouter = require("./Router/orderRouter");
const adRouter = require("./Router/adRouter");



// App
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/ads", adRouter);



// Error handling
app.use(unknownEndpoint);
app.use(errorHandler);

// Export the server
module.exports = app;
