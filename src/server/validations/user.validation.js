import { Joi } from 'express-validation';

const userValidation = {
  getAll: {
    query: Joi.object({
      userId: Joi.number().integer(),
      enabled: Joi.boolean(),
    }),
  },
  create: {
    body: Joi.object({
      enabled: Joi.boolean(),
      roles: Joi.array().items(Joi.number().integer()).default([]),
    }),
  },
  update: {
    params: Joi.object({
      userId: Joi.number().integer().required(),
    }),
    body: Joi.object({
      enabled: Joi.boolean().required(),
      roles: Joi.array().items(Joi.number().integer()).default([]),
    }),
  },
  partialUpdate: {
    params: Joi.object({
      userId: Joi.number().integer().required(),
    }),
    body: Joi.object({
      enabled: Joi.boolean(),
      roles: Joi.array().items(Joi.number().integer()).default([]),
    }),
  },
  destroy: {
    params: Joi.object({
      userId: Joi.number().integer().required(),
    }),
  },
};

export { userValidation };
