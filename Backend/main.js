const express = require("express");
const app = express();

const { getRoot } = require('./controller'); // getRoot is imported

app.get('/', getRoot); // getRoot is used as a callback

const port = 3001;
// Start the server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});