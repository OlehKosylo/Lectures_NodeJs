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
    }
}
