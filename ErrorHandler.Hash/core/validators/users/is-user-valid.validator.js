const Joi = require('joi')

module.exports = Joi.object().keys({
    id: Joi.number().integer().optional(),
    name: Joi.string().trim().min(2).max(15).required(),
    email: Joi.string().trim().min(5).required(),
    password: Joi.string().trim().min(8).required()
})
