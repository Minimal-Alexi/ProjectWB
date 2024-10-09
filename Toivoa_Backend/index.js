const app = require('./app')
const http = require('http')
const server = http.createServer(app)
require('dotenv').config();
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})