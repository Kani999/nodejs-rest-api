require('dotenv').config()

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('To-Do list RESTful API server started on: ' + port);
