const express = require('express');

const {apiRouter, notFoundRouter} = require("./routes");

const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use('/api', apiRouter)
app.use('*', notFoundRouter)


app.listen(5000, err => err && console.log(err) || console.log('Listen 5000 ...'))
