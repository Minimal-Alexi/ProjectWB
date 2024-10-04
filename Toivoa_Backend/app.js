const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();



const logger = require("./Middleware/logger");
const { unknownEndpoint, errorHandler } = require("./Middleware/errorHandling");
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
const userRouter = require("./Router/userRouter");
const productRouter = require("./Router/productRouter");
const orderRouter = require("./Router/orderRouter");
const adRouter = require("./Router/adRouter");
const commentRouter = require("./Router/commentRouter");

// App
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/ads", adRouter);
app.use("/api/comments", commentRouter);

// Error handling
app.use(unknownEndpoint);
app.use(errorHandler);
// Export server

module.exports = app;