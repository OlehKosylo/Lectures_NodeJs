const express = require('express');
const morgan = require('morgan')
const dotenv = require('dotenv');
const {appConfig: {PORT}} = require("./config");

const {apiRouter} = require("./routes");
const {sequelize} = require('./dataBase')


dotenv.config();

const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('dev'))

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
    .then(() => app.listen(PORT, err => err && console.log(err) || console.log('Listen 5000 ...')))
    .catch(console.log)
