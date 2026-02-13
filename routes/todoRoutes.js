
const express = require('express');
const router = express.Router();
const Todo = require('../models/to-do');


router.post('/', async (req, res) => {
    try {
        const newTask = new Todo({
            title: req.body.title
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const tasks = await Todo.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 