const Joi = require('joi');
const { CYCLE, RECURSION } = require('../../constants/globalVar');

exports.idValidator = Joi.object().keys({
  id: Joi.number().integer().min(0).required(),
});

exports.numberValidator = Joi.object().keys({
  number: Joi.number().integer().min(0).required(),
  type: Joi.string().valid(RECURSION, CYCLE).required(),
});

