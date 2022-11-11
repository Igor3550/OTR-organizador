export type UserEntity = {
  id: number,
  name: string
}

export type User = Omit<UserEntity, 'id'>