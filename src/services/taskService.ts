import { findAllTasks } from "../repositorys/taskRepositosy.js";

async function getAllTasks() {
  const tasks = await findAllTasks();
  return tasks;
}

export {
  getAllTasks
}