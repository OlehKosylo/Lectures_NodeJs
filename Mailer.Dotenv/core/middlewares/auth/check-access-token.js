const jwt = require('jsonwebtoken')

const {authService} = require("../../services");
const {jwtSecrets} = require("../../config");
const {ErrorHandler} = require("../../Errors");

module.exports = async (req, res, next) => {
    const token = req.get('Authorization')

    if(!token) {
        return next( new ErrorHandler('Not token', 4002, 400))
    }

    jwt.verify(token, jwtSecrets.JWT_SECRET, err => {
        if(err) {
            return next( new ErrorHandler('Not token', 4011, 401))
        }
    })

    const isTokenExist = await authService.getTokensByParams({access_token: token})

    if(!isTokenExist) {
        return next( new ErrorHandler('Not token', 4011, 401))
    }

    req.userId = isTokenExist.user_id;

    next();
}
