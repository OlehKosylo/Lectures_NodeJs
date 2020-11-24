const uuid = require('uuid').v1()
const fs = require('fs-extra').promises
const path = require('path')

const {ACTIVATE_USER_ACCOUNT} = require("../../constants/emailAction.enum");
const {emailService} = require("../../services");
const {statusesCode} = require("../../config");
const {statusError} = require("../../Errors");
const {ErrorHandler} = require("../../Errors");
const {checkHash} = require("../../helpers");
const {hashPassword} = require("../../helpers");
const {usersService} = require("../../services");

module.exports = {
    getAllUsers:  async (req,res) => {
        const users = await usersService.getUsers()

        res.json(users)
    },

    getOneUser: async (req,res) => {
        const {name} = req.params;
        // const queryParams = req.query;

        const user = await usersService.getUserByName(name)

        res.json(user)
    },

    createUser: async (req,res) => {
        const user  = req.body;
        const [avatar] = req.photos;

        user.password = await hashPassword(user.password);
        const createdUser =  await usersService.createUser(user);

        if(avatar) {
            const photoDir = `users/${createdUser.id}/photos`
            const fileExtension = avatar.name.split('.').pop();
            const photoName = `${uuid}.${fileExtension}`

            await fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), {recursive: true})
            await avatar.mv(path.resolve(process.cwd(), 'public', photoDir, photoName));

            await usersService.updateUser(createdUser.id, {photo: `${photoDir}/${photoName}`})
        }



        await emailService.sendMail(user.email, ACTIVATE_USER_ACCOUNT, {
            token: '123123213213213211',
            userEmail: 'Oleh'
        })


        res.json(createdUser)
    },

    updateUser: (req,res) => {
        const data = req.body;
        const {id} = req.params;

        const db = usersService.updateUser(id,data)
        res.json(db)
    },

    deteleUser: async (req,res) => {
        const  {id} = req.params;

        const db =  await usersService.deleteUser(id)
        res.json(db)
    },

    loginUser: async (req, res, next) => {
        const {password} = req.body;
        const user = req.user;

       const status = await checkHash(user.password, password);

       if(!status) {
           return next(new ErrorHandler(
               statusError.BAD_REQUEST.message,
               statusError.BAD_REQUEST.code,
               statusesCode.UNAUTHORIZED
           ))
       }

       res.json(user)
    }
}
