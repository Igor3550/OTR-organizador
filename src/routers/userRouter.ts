import express from 'express';
import { getUsers, createUser, updateUserName, deleteUser } from '../controllers/userController.js'
import { userExistVerify } from '../middlewares/userMiddleware.js';

const router = express.Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.put('/users/:id', userExistVerify, updateUserName)
router.delete('/users/:id', userExistVerify, deleteUser)

export default router;