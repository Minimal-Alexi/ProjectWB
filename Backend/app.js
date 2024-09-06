const express = require("express");
const app = express();

const logger = require("./Middleware/logger");

//middleware
app.use(express.json());
app.use(logger)

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});