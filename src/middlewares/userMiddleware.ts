import { Request, Response, NextFunction } from 'express';
import { getUserById } from '../repositorys/userRepository.js'

export async function userExistVerify(req: Request, res: Response, next: NextFunction){
  const userId = Number(req.params.id)
  try {
    const user = await getUserById(userId)
    if(!user.rows[0]) return res.status(404).send({message: 'User does not exist!'})
    next()
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}