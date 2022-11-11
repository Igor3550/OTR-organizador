import express, { Request, Response } from "express";
import tasksRouter from './routers/taskRouter.js';
import dotenv from '../node_modules/dotenv/lib/main.js';
dotenv.config()

const server = express();
const PORT = process.env.PORT || 4001
server.use(express.json())

server.get('/status', (req: Request, res: Response) => {
  return res.send('Working...');
})

server.use(tasksRouter);

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`)
})