import { QueryResult } from 'pg';
import { connection } from "../database/db.js";
import { User } from '../protocols/User.js';


async function listUsers (): Promise<QueryResult<User>> {
  const users = await connection.query(`
    SELECT * FROM users;
  `)
  return users;
}

async function insertUniqueUser (userName: string) {
  await connection.query(`
    INSERT INTO users (name) VALUE ($1);
  `, [userName])
}

async function updateUserName (newName: string, userId: number) {
  await connection.query(`
    UPDATE users SET name=$1 WHERE id = $2;
  `, [newName, userId])
}

async function deleteUser (userId: number) {
  await connection.query(`
    DELETE FROM users WHERE id = $1;
  `, [userId])
}

export {
  listUsers,
  insertUniqueUser,
  updateUserName,
  deleteUser
}