const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createSaveTask);
router.post('/remove', TaskController.removeTask);
router.get('/', TaskController.showTasks);

module.exports = router;