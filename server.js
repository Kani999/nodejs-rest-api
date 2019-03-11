// load .env file
require('dotenv').config()

const http = require("http");
const app = require('./app');
 
//Use system configuration for port 
const port = process.env.PORT;
 
//Create server with exported express app
const server = http.createServer(app);
server.listen(port);

console.log('To-Do list RESTful API server started');
