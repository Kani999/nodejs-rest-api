const express = require('express');
const bodyparser = require("body-parser");
const cors = require("cors");

// API
const tasks = require('./api/routes/tasks');

const app = express();

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


// API
app.use("/tasks", tasks);

// Requests (routes)
// curl 127.0.0.1:3000
app.get('/', function (req, res) {
   res.send(process.env.DB_HOST);
})

// write routes above
//if we are here then the specified request is not found
app.use((req,res,next)=> {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//all other requests are not implemented.
app.use((err,req, res, next) => {
   res.status(err.status || 501);
   res.json({
       error: {
           code: err.status || 501,
           message: err.message
       }
   });
});

module.exports = app;
