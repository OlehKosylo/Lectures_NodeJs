const {ErrorHandler} = require("../../Errors");
const {filesOptions} = require("../../constants");

module.exports = async (req,res,next) => {
    req.photos = [];
    req.docs = [];

    if(!req.files) {
        return next();
    }

    const files = Object.values(req.files)

    for(let i=0; i< files.length; i++) {
        const {size,mimetype, name} = files[i];

        if(filesOptions.PHOTO_MIMETYPES.includes(mimetype)) {
            if(size > filesOptions.MAX_PHOTO_SIZE) {
                return next (new ErrorHandler('Max file is not valid', 4006, 400))
            }
            req.photos.push(files[i])

        } else if (filesOptions.DOC_MIMETYPES.includes(mimetype)) {
            if(size > filesOptions.MAX_DOC_SIZE) {
                return next (new ErrorHandler('File size is not valid', 4006, 400))
            }
            req.docs.push(files[i])
        } else {
            return next(new ErrorHandler(`File ${name} is not valid`, 4005, 400))
        }
    }

    next();
}
