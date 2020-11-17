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

        user.password = await hashPassword(user.password);
        const x =  await usersService.createUser(user);

        res.json(x)
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
