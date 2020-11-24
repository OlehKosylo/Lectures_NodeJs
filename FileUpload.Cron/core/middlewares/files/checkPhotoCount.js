const {ErrorHandler} = require("../../Errors");

module.exports = async (req, res, next) => {

    if(req.docs.length) {
        return next(new ErrorHandler(`Error. You can upload only photo`, 4007,400))
    }

    if(req.photos.length > 1) {
        return next(new ErrorHandler(`You cant upload more than one photo`, 4008, 400))
    }

    next();
}
