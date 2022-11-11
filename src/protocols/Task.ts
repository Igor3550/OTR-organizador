export type TaskEntity = {
  id: number,
  name: string,
  description?: string,
  responsable: number,
  issue_date: Date,
  status: boolean
}

export type Task = Omit<TaskEntity, 'id'>