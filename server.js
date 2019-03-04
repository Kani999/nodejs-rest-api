require('dotenv').config()

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// curl 127.0.0.1:3000
app.get('/', function (req, res) {
   res.send(process.env.DB_HOST + ' ' + process.env.DB_USER);
})

app.listen(port);

console.log('To-Do list RESTful API server started on: ' + port);
