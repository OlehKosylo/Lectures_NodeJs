const {Sequelize} = require('sequelize');

module.exports.sequelize = new Sequelize('users',
    'root',
    'root', {
        host: 'localhost',
        dialect: 'mysql'
    })
