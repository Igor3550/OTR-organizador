import { Request, Response } from 'express';
import { listUsers, insertUniqueUser, changeUserName, deleteUserById } from "../repositorys/userRepository.js";

async function getUsers(req: Request, res: Response) {
  try {
    const users = await listUsers()
    return res.send(users.rows)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

async function createUser(req: Request, res: Response) {
  const userName = req.body.name
  try {
    await insertUniqueUser(userName)
    return res.sendStatus(201)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

async function updateUserName(req: Request, res: Response){
  const newName = req.body.newName
  const userId = Number(req.params.id)
  
  if(!userId) return res.status(404).send({message: 'User does not exist'})
  if(!newName) return res.sendStatus(400)
  
  try {
    await changeUserName(newName, userId)
    return res.send({
      message: `User name updated! userId: ${userId}!`
    })
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

async function deleteUser(req: Request, res: Response){
  const userId = Number(req.params.id)
  try {
    await deleteUserById(userId)
    return res.send({
      message: `User id:${userId} deleted!`
    })
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

export {
  getUsers,
  createUser,
  updateUserName,
  deleteUser
}