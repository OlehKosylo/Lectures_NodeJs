const usersRouter = require("../users/users.router");
const authRouter = require("../auth/auth.router");


const {Router} = require('express')

const apiRouter = Router();

apiRouter.use('/users', usersRouter)
apiRouter.use('/auth', authRouter)

module.exports = apiRouter;

