import { Joi } from 'express-validation';

const roleValidation = {
  getAll: {
    query: Joi.object({
      roleId: Joi.number().integer(),
      name: Joi.string().max(255),
    }),
  },
  create: {
    body: Joi.object({
      name: Joi.string().max(255),
      users: Joi.array().items(Joi.number().integer()).default([]),
    }),
  },
  update: {
    params: Joi.object({
      roleId: Joi.number().integer().required(),
    }),
    body: Joi.object({
      name: Joi.string().max(255).required(),
      users: Joi.array().items(Joi.number().integer()).default([]),
    }),
  },
  partialUpdate: {
    params: Joi.object({
      roleId: Joi.number().integer().required(),
    }),
    body: Joi.object({
      name: Joi.string().max(255),
      users: Joi.array().items(Joi.number().integer()).default([]),
    }),
  },
  destroy: {
    params: Joi.object({
      roleId: Joi.number().integer().required(),
    }),
  },
};

export { roleValidation };
