import { Task } from "../protocols/Task.js";
import { deleteTask, findAllTasks, countTasksOfUsers, insertTask, updateTask } from "../repositorys/taskRepositosy.js";

async function getAllTasks() {
  const tasks = await findAllTasks();
  return tasks;
}

async function getCountTasks() {
  const tasks = await countTasksOfUsers();
  return tasks;
}

async function insertUniqueTask (task:Task) {
  await insertTask(task);
}

async function updateService (status: boolean, taskId: number) {
  await updateTask(status, taskId);
}

async function deleteService (taskId: number) {
  await deleteTask(taskId);
}

export {
  getAllTasks,
  getCountTasks,
  insertUniqueTask,
  updateService,
  deleteService
}