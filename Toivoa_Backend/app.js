const express = require("express");
const app = express();
const port = require('./security_credentials.json').port;

const userRouter = require("./Router/userRouter");


const logger = require("./Middleware/logger");

//middleware
app.use(express.json());
app.use(logger)

app.use("/users",userRouter)


// Start the server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});