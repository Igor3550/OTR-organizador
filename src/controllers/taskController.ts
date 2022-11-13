import { Request, Response } from 'express';
import { Task } from '../protocols/Task.js';
import { getAllTasks, insertUniqueTask, updateService } from '../services/taskService.js'

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
  const task = res.locals.task as Task
  try {
    await insertUniqueTask(task)
    return res.sendStatus(201)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

async function updateTask(req: Request, res: Response) {
  const taskId = Number(req.params.id)
  const status = req.body.status

  try {
    await updateService(status, taskId);
    return res.send({
      message: `Task id:${taskId} updated!`
    })
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export {
  listTasks,
  insertTask,
  updateTask
}