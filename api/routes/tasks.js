express = require("express");
db = require("../../config/database.js");
Task = require("../models/task");

const router = express.Router();

// SELECT ALL
router.get("/", (req, res, next) => {
    db.query(Task.getAllTaskSQL(), (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Tasks listed.",
                taskId:data
            });
        }
    });    
});

// CREATE
router.post("/add", (req, res, next) => {
    //read task information from request
    let task = new Task(req.body.task_name, req.body.task_status);

    console.log(task)

    db.query(task.getAddTaskSQL(), (err, data)=> {
        res.status(200).json({
            message:"Task added.",
            taskId: data.insertId
        });
    });
});

// SHOW
router.get("/:taskId", (req, res, next) => {
    let pid = req.params.taskId;

    db.query(Task.getTaskByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {
                
                res.status(200).json({
                    message:"Task found.",
                    task: data
                });
            } else {
                res.status(200).json({
                    message:"Task Not found."
                });
            }
        } 
    });    
});

// DELETE
router.post("/delete", (req, res, next) => {

    var pid = req.body.taskId;

    db.query(Task.deleteTaskByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.affectedRows > 0) {
                res.status(200).json({
                    message:`Task deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message:"Task Not found."
                });
            }
        } 
    });   
});

module.exports = router;

