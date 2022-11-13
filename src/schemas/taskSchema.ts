import Joi from "joi";

export const taskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  responsable: Joi.number().required(),
  issue_date: Joi.string() || Joi.date(),
  status: Joi.boolean
});