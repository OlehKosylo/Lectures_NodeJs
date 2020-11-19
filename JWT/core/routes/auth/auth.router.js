const {Router} = require('express')

const authController = require("../../controllers/auth");
const {usersMiddlewares, authMiddlewares} = require("../../middlewares");

const authRouter = Router();

authRouter.post('/', usersMiddlewares.findUserByEmail, authController.loginUser)
authRouter.post('/refresh', authMiddlewares.checkRefreshToken, authController.refreshToken)
authRouter.post('/logout', authController.logoutUser)


module.exports = authRouter;
