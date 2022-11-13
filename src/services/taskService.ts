import { Task } from "../protocols/Task.js";
import { findAllTasks, insertTask, updateTask } from "../repositorys/taskRepositosy.js";

async function getAllTasks() {
  const tasks = await findAllTasks();
  return tasks;
}

async function insertUniqueTask (task:Task) {
  await insertTask(task);
}

async function updateService (status: boolean, taskId: number) {
  await updateTask(status, taskId);
}

export {
  getAllTasks,
  insertUniqueTask,
  updateService
}