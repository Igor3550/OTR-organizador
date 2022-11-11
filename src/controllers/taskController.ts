import { Request, Response } from 'express';
import { Task } from '../protocols/Task.js';
import { getAllTasks } from '../services/taskService.js'

async function listTasks (req: Request, res: Response) {
  try {
    const tasks = await getAllTasks();
    return res.send(tasks.rows);
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

async function insertTask (req: Request, res: Response) {
  const task:Task = req.body

}

export {
  listTasks
}