import { QueryResult } from 'pg';
import { connection } from "../database/db.js";
import { UserEntity } from '../protocols/User.js';


async function listUsers (): Promise<QueryResult<UserEntity>> {
  const users = await connection.query(`
    SELECT * FROM users;
  `)
  return users;
}

async function insertUniqueUser (userName: string) {
  await connection.query(`
    INSERT INTO users (name) VALUES ($1);
  `, [userName])
}

async function changeUserName (newName: string, userId: number) {
  await connection.query(`
    UPDATE users SET name=$1 WHERE id = $2;
  `, [newName, userId])
}

async function deleteUserById (userId: number) {
  await connection.query(`
    DELETE FROM users WHERE id = $1;
  `, [userId])
}

async function getUserById(userId:number): Promise<QueryResult<UserEntity>> {
  const user = await connection.query(`
    SELECT * FROM users WHERE id = $1;
  `, [userId])
  return user;
}

export {
  listUsers,
  insertUniqueUser,
  changeUserName,
  deleteUserById,
  getUserById
}