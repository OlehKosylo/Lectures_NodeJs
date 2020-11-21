const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../index');

class UserModal extends Model {
}

UserModal.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // todo user_role

    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // todo the_best_drop

    balance: {
        type: DataTypes.ШТzz,
        allowNull: false,
        defaultValue: 0
    },

    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize})

module.exports = UserModal;

