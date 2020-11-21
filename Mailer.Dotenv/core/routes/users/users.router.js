const {Router} = require('express');

const {usersController} = require("../../controllers");
const {usersMiddlewares} = require("../../middlewares");
const {checkAccessToken} = require("../../middlewares/auth");

const usersRouter = Router();

usersRouter.get('/', usersController.getAllUsers)

usersRouter.get('/:name', usersController.getOneUser)

usersRouter.post('/', usersMiddlewares.isUserDataValid, usersController.createUser)

usersRouter.put('/:id', usersController.updateUser)

usersRouter.delete('/:id', usersController.deteleUser)

// usersRouter.post('/login',  usersMiddlewares.findUserByEmail, usersController.loginUser)

module.exports = usersRouter;
