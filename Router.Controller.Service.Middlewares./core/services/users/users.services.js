let DB = [];

module.exports = {
    createUser: async (user) => {
       await DB.push(user)

        return user;
    },

    getUsers: ()=> {
        return DB;
    },

    getUserByName: (name) => {
        return DB.find(user => user.name === name)
    },

    updateUser: (id, newData) => {
        DB.forEach((user, index) => {
            if(user.id === +id) {
                DB[index] = newData;
            }
        })

        return DB;
    },

    deleteUser: (id) => {
        DB = DB.filter(user => user.id !== +id)

        return DB;
    }

}
