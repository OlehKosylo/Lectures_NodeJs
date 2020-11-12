const {Router} = require('express');

const {usersController} = require("../../controllers");
const {usersMiddlewares} = require("../../middlewares");

const usersRouter = Router();

usersRouter.get('/', usersController.getAllUsers)

usersRouter.get('/:name', usersController.getOneUser)

usersRouter.post('/',usersMiddlewares.isUserDataValid, usersMiddlewares.isUserExist, usersController.createUser)

usersRouter.put('/:id', usersController.updateUser)

usersRouter.delete('/:id', usersController.deteleUser)

module.exports = usersRouter;
