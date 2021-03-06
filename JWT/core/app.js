const express = require('express');

const {apiRouter, notFoundRouter} = require("./routes");
const {sequelize} = require('./dataBase')

const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use('/api', apiRouter)
app.use('*', (err, req, res, next) => {
    res
        .status(err.status)
        .json({
            message: err.message,
            code: err.customCode
        })
})

sequelize.sync({alter: true})
    .then(() => app.listen(5000, err => err && console.log(err) || console.log('Listen 5000 ...')))
    .catch(console.log)
