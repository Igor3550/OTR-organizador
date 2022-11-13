import { Request, Response, NextFunction } from 'express';
import { TaskEntity } from '../protocols/Task.js';
import { getUserById } from '../repositorys/userRepository.js';
import { taskSchema } from '../schemas/taskSchema.js';

async function taskInputVerify (req: Request, res: Response, next: NextFunction){
  const task = req.body as TaskEntity
  try {
    const { error } = taskSchema.validate(task)
    if(error){
      return res.status(400).send({
        message: error.message 
      })
    }
    const userExists = await getUserById(task.responsable)
    if(!userExists.rows[0]) return res.status(404).send({
      message: `This responsable does not exists!`
    })
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