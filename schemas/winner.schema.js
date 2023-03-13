const Joi = require('joi');

const id = Joi.number().integer();
const nameWinner = Joi.string().min(3).max(15);

const createWinnerSchema = Joi.object({
  nameWinner: nameWinner.required(),
});

const updateWinnerSchema = Joi.object({
  nameWinner: nameWinner,
});

const getWinnerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createWinnerSchema, updateWinnerSchema, getWinnerSchema }
