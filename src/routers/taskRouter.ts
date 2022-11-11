import express from 'express'
import { listTasks } from '../controllers/taskController.js';

const router = express.Router()

router.get('/tasks', listTasks);

export default router;