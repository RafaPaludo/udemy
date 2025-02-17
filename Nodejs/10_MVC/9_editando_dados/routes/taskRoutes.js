const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');
const Task = require('../models/Task');

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createSaveTask);
router.post('/remove', TaskController.removeTask);
router.get('/edit/:id', TaskController.updateTask);
router.get('/', TaskController.showTasks);

module.exports = router;