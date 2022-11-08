import express, { Request, Response } from "express";

const server = express();
const PORT = process.env.PORT || 4000
server.use(express.json())

server.get('/status', (req: Request, res: Response) => {
  return res.send('Working...');
})

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`)
})