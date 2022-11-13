import express from 'express'
import { listTasks, getCountUsersTasks, insertTask, updateTask, deleteTask } from '../controllers/taskController.js';
import { taskInputVerify } from '../middlewares/taskMiddleware.js';

const router = express.Router()

router.get('/tasks', listTasks);
router.get('/tasks/count/', getCountUsersTasks);
router.post('/tasks', taskInputVerify, insertTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;