const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger.json");  // Assuming swagger.json is in the same directory

require("dotenv").config();

const logger = require("./Middleware/logger");
const { unknownEndpoint, errorHandler } = require("./Middleware/errorHandling");

// Middleware
app.use(cors());
app.use(express.json());
if(process.env.NODE_ENV !== 'test')
    {
        //this makes it so only the tests are console logged.
        app.use(logger);
    }

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
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));



// Error handling
app.use(unknownEndpoint);
app.use(errorHandler);

// Export the server
module.exports = app;
