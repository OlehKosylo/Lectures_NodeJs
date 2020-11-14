const {UserModal} = require('../../dataBase/models')

module.exports = {
    createUser: async (user) => {
        console.log(user);
        return UserModal.create(user)
    },

    getUsers: () => {
        return UserModal.findAll();
    },

    getUserByName: (name) => {
        return UserModal.findOne({
            where: {name}
        });
    },

    updateUser: (id, obj) => {
        return UserModal.update(
            {...obj},
            {where: {id}}
        )
    },

    deleteUser: async (id) => {
        await UserModal.destroy({
            where: {id}
        });
    },
}
