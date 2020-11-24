const {Router} = require('express');

const {usersController} = require("../../controllers");
const {usersMiddlewares, filesMiddlewares} = require("../../middlewares");


const usersRouter = Router();

usersRouter.get('/', usersController.getAllUsers)

usersRouter.get('/:name', usersController.getOneUser)

usersRouter.post('/',
    filesMiddlewares.checkFileMiddleware,
    filesMiddlewares.checkPhotoCount,
    usersMiddlewares.isUserDataValid,
    usersController.createUser)

usersRouter.put('/:id', usersController.updateUser)

usersRouter.delete('/:id', usersController.deteleUser)

// usersRouter.post('/login',  usersMiddlewares.findUserByEmail, usersController.loginUser)

module.exports = usersRouter;
