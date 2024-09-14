const connectDB = require("./config/db");
const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000

const logger = require("./Middleware/logger");
const {unknownEndpoint,errorHandler} = require("./Middleware/errorHandling");
connectDB();

//middleware
app.use(express.json());
app.use(logger)


//routes
const userRouter = require("./Router/userRouter");
const productRouter = require("./Router/productRouter");
const orderRouter = require("./Router/orderRouter");
const adRouter = require("./Router/adRouter");



app.use("/users",userRouter);
app.use("/products",productRouter);
app.use("/orders",orderRouter);
app.use("/ads",adRouter);

// Error handling
app.use(unknownEndpoint);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});