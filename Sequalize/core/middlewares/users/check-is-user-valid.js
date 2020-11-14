const Joi = require('joi')
const {usersValidators} = require("../../validators");

module.exports = (req, res, next) => {
    try {
        const user = req.body;

        const {error} = Joi.validate(user, usersValidators.isUserValid)

        if (error) {
            throw new Error('Wrong data')
        } else {
            next()
        }

    } catch (e) {
        res.json(e.message)
    }
}
