import * as Joi from 'joi';

export const envValidation = Joi.object({
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_SSL: Joi.boolean().required(),
  PORT: Joi.number().required(),
  AUTH_SECRET: Joi.string().required(),
  AUTH_EXPIRES: Joi.string().required(),
  WEB_APP_ORIGIN: Joi.string().uri().required(),
});
