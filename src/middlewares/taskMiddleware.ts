import { Request, Response, NextFunction } from 'express';
import { TaskEntity } from '../protocols/Task.js';
import { taskSchema } from '../schemas/taskSchema.js';

function taskInputVerify (req: Request, res: Response, next: NextFunction){
  const task = req.body as TaskEntity
  try {
    const { error } = taskSchema.validate(task)
    if(error){
      return res.status(400).send({
        message: error.message 
      })
    }
    res.locals.task = task
    return next()
  } catch (error) {
    console.log(error)
    return res.sendStatus(500);
  }
}

export {
  taskInputVerify
}