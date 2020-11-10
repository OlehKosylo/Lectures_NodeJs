// const {EventEmitter} = require('events')
// const ee = new EventEmitter;
//
// ee.on('hello', (value) => {
//     console.log(`hello ${value}`)
// })
//
// ee.emit('hello', 'world')
//
// ee.once('test', () => {
//     console.log('test')
// })
//
// ee.emit('test')
// ee.emit('test')
//
// ee.off('test', () => {
//     console.log('hello off')
// })

// Streams
// const fs = require('fs');
const path = require('path')
//
// const writeStream = fs.createWriteStream(path.join(__dirname, 'data.txt'))
// //
// for(let i=0; i< 10000; i++) {
//     writeStream.write('text text text text')
// }
//
// const readStream = fs.createReadStream(path.join(__dirname, 'data.txt'))
// readStream.on('data', chunk => {
//     // console.log(chunk)
//     // console.log(chunk.toString());
// })

// readStream.on('end', () => console.log('end reading'))
//
// const writeStream2 = fs.createWriteStream(path.join(__dirname, 'data2.txt'))
// readStream.pipe(writeStream2);

// Express
const express = require('express')

// GET, POST , PUT, PATCH , DELETE
const app = express();

app.get('/', (req, res) => {

    res.json('Hello world')
    // res.end('Hello world')
})

// Templates
const expressBars = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'static', 'views')));
app.use(express.json())
app.use(express.urlencoded())

app.engine('.hbs', expressBars({
    extname: '.hbs',
    defaultLayout: false
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'static', 'views'))

app.get('/main', (req,res) => {
    res.render('main', {name: 'Oleh', showed: true})
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/reg', (req,res) => {
    console.log(req.body);
    res.end();
})


app.listen(5000, err => err && console.log(err) || console.log('Listen 5000 ...'))
