import express from 'express'
import { listTasks, insertTask, updateTask } from '../controllers/taskController.js';
import { taskInputVerify } from '../middlewares/taskMiddleware.js';

const router = express.Router()

router.get('/tasks', listTasks);
router.post('/tasks', taskInputVerify, insertTask)
router.put('/tasks/:id', updateTask)

export default router;