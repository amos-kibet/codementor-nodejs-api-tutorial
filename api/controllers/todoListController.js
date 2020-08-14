'use strict';

const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

// Controller for GET method
exports.list_all_tasks = (req, res) => {
    Task.find({}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

// Controller function for POST method
exports.create_a_task = (req, res) => {
    const new_task = new Task(req.body);
    new_task.save((err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

// Controller function for GET method for specific task
exports.read_a_task = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

// Controller function for PUT method
exports.update_a_task = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

// Controller function for DELETE method
exports.delete_a_task = (req, res) => {
    Task.remove({_id: req.params.taskId}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Task deleted successfully!'});
    });
};