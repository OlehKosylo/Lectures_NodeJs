const {authService} = require("../../services");
const {jwtTokinazer} = require("../../helpers");
const {ErrorHandler} = require("../../Errors");
const {checkHash} = require("../../helpers");

module.exports = {
    loginUser: async (req,res,next) => {
        const {password} = req.body;
        const user = req.user;

        const status = await checkHash(user.password, password)

        if(!status) {
            return next(new ErrorHandler('Bad request', 4001, 400))
        }

        const tokens = jwtTokinazer()
        await authService.createTokens({...tokens, user_id: user.id})

        res.json(tokens)
    },

    logoutUser: async (req,res,next) => {
        const access_token = req.get('Authorization')

        console.log(access_token);

        await authService.deleteByParams({access_token})

        res.json(204)
    },

    refreshToken: async (req,res,next) => {
        const refresh_token = req.get('Authorization')

        await authService.deleteByParams({refresh_token})


        console.log(req);
        const tokens = jwtTokinazer()
        await authService.createTokens({...tokens, user_id: req.userId})

       res.json(tokens)
    }
}
