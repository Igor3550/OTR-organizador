import { Request, Response, NextFunction } from 'express';
import { TaskEntity } from '../protocols/Task';
import { taskSchema } from '../schemas/taskSchema.js';

function taskInputVerify (req: Request, res: Response, next: NextFunction){
  const task:TaskEntity = req.body
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