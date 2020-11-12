const {usersService} = require("../../services");

module.exports = {
    getAllUsers: (req,res) => {
        const users = usersService.getUsers()

        res.json(users)
    },

    getOneUser: (req,res) => {
        const {name} = req.params;
        // const queryParams = req.query;

        const user = usersService.getUserByName(name)

        res.json(user)
    },

    createUser: (req,res) => {
        const user  = req.body;

        const createdUser = usersService.createUser(user);

        res.json(createdUser)
    },

    updateUser: (req,res) => {
        const data = req.body;
        const {id} = req.params;

        const db = usersService.updateUser(id,data)
        res.json(db)
    },

    deteleUser: (req,res) => {
        const  {id} = req.params;

        const db = usersService.deleteUser(id)
        res.json(db)
    }
}
