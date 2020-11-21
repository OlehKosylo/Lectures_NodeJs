const {statusesCode} = require("../../config");
const {statusError, ErrorHandler} = require("../../Errors");
const {usersService} = require("../../services");

module.exports = async (req, res, next) => {
    const {email} = req.body;

    const user = await usersService.getUserByParams({email})

    if(!user) {
        return next(new ErrorHandler(
            statusError.USER_NOT_FOUND.message,
            statusError.USER_NOT_FOUND.code,
            statusesCode.NOT_FOUND
        ))
    }

    req.user = user;
    next();
}
