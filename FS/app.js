const path  = require('path');
const os = require('os');
const fs = require('fs');

const {calc} = require('./files/file')
// calc(1,2,4,5)

// console.log(process.cwd());
// console.log(__dirname);
// console.log(__filename);

// const xxx = 'xasdsa'
//
// console.log(xxx + ' ' + 'dasdsadsa')
// console.log(`${xxx} dsadsadsad`)

// Щоб шлях був без помилок
const validPath = path.resolve(`${process.cwd()}////////\/../folder`)

// Створить шлях з правильними шляхами
const pathString = path.join(__dirname, 'files2', 'data.txt')

// Перезаписати в файл
// fs.writeFile(
//     path.join(__dirname, 'folder', 'folder.txt'),
//     'Hello world2',
//     err => console.log(err)
// )

// Дописати в файл
// fs.appendFile(
//     path.join(__dirname, 'folder', 'folder.txt'),
//     'Hello world 3 \n',
//     {flag : 'a'},
//     err => console.log(err)
// )

// Прочитати з файлу
// fs.readFile(path.join(__dirname, 'folder', 'folder.txt'), (err, data) => {
//     console.log(data);
//     console.log(data.toString());
// })

// Зчитати папку на файли
// fs.readdir(path.join(__dirname, 'folder'), (err, data) => console.log(data))

// Статистика файла
// fs.stat(path.join(__dirname, 'folder', 'folder.txt'), (err, data) => console.log(data))

// Створити папку
// fs.mkdir(path.join(__dirname, 'testFolder'), err => console.log(err))

// Стерти файлик
// fs.unlink(path.join(__dirname, 'testFolder', 'xxx.txt'), err => console.log(err))

// Удалити папку, якщо не пуста , удалити не пусту можна з задопомогою fs-extra (потрібно підключити)
// fs.rmdir(path.join(__dirname, 'testFolder'), err => console.log(err))

// Щоб перейменувати, але можна і перенести файл в іншу дерикторію, якщо вона є
// fs.rename(path.join(__dirname, 'folder', 'xxx2.txt'), path.join(__dirname, 'files', 'xxx2.txt'), err => console.log(err))
