import { connection } from '../database/db.js'
import { TaskEntity, Task } from '../protocols/Task.js'
import { QueryResult } from 'pg';
 
async function findAllTasks (): Promise<QueryResult<TaskEntity>> {

  const tasks = await connection.query(`
    SELECT
      tasks.id,
      tasks.name,
      tasks.description,
      tasks.responsable,
      tasks.issue_date, 
      tasks.done AS status 
    FROM tasks
    ORDER BY id;
  `)
  return tasks;

}

async function findTaskById (taskId: number): Promise<QueryResult<TaskEntity>> {

  const tasks = await connection.query(`
    SELECT * FROM tasks WHERE id = $1;
  `, [taskId])
  return tasks;

}

async function insertTask (task: Task) {
  await connection.query(`
    INSERT INTO tasks (name, description, responsable, issue_date, done) VALUES ($1, $2, $3, $4, $5);
  `, [task.name, task.description, task.responsable, task.issue_date, task.status]);
}

async function updateTask(status: boolean, taskId: number) {
  await connection.query(`
    UPDATE tasks SET done=$1 WHERE id = $2;
  `, [status, taskId])
}

async function deleteTask (taskId: number) {
  await connection.query(`
    DELETE FROM tasks WHERE id = $1;
  `, [taskId])
}

export {
  findAllTasks,
  insertTask,
  updateTask
}