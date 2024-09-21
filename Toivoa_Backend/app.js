const connectDB = require("./config/db");
const express = require("express");
const app = express();
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 4000

const logger = require("./Middleware/logger");
const {unknownEndpoint,errorHandler} = require("./Middleware/errorHandling");
connectDB();

//middleware
app.use(express.json());
app.use(logger);
app.use(cors);


//routes
const userRouter = require("./Router/userRouter");
const productRouter = require("./Router/productRouter");
const orderRouter = require("./Router/orderRouter");
const adRouter = require("./Router/adRouter");



app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/orders",orderRouter);
app.use("/api/ads",adRouter);

// Error handling
app.use(unknownEndpoint);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});