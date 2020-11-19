const Joi = require('joi')

const statusError = require("../../Errors/status-errors");
const {statusesCode} = require("../../config");
const {ErrorHandler} = require("../../Errors");
const {usersValidators} = require("../../validators");

module.exports = (req, res, next) => {
        const user = req.body;

        const {error} = Joi.validate(user, usersValidators.isUserValid)

        if (error) {
            return next(new ErrorHandler(
                statusError.BAD_REQUEST.message,
                statusError.BAD_REQUEST.code,
                statusesCode.BAD_REQUEST
            ))
        }

        next()
}
