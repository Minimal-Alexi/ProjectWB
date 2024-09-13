const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000

const userRouter = require("./Router/userRouter");


const logger = require("./Middleware/logger");
const {unknownEndpoint,errorHandler} = require("./Middleware/errorHandling");

//middleware
app.use(express.json());
app.use(logger)


//routes

app.use("/users",userRouter)


// Error handling
app.use(unknownEndpoint);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});