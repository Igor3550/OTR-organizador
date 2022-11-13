import express from "express";
import dotenv from 'dotenv';
import tasksRouter from './routers/taskRouter.js';
import userRouter from './routers/userRouter.js';
dotenv.config()

const PORT = process.env.PORT || 4001
const server = express();
server.use(express.json())

server.use(tasksRouter);
server.use(userRouter);

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`)
})