// app.js

const express = require('express')
const cors = require('cors')

// ДЛЯ ИМПОРТА ЧАСТИ С СЕРВЕРА ROUTES
//1) импортирует часть сервера в основной
// const booksRouter = require('./routes/api/books')

// испортировали часть роутов
const booksRouter = require('./routes/api/books')

const books = require('./library')
const app = express()

app.use(cors())

//2) указываем серверу, где все маршруты с api books нужно искать. Т.е при любом запросе с /api/books ищи его обработчик здесь => booksRouter

// указываем использование части router , если маршрут начинается с api/books то ищем его в booksRouter папке/файле
app.use('/api/books', booksRouter)

// app.get('/api/books', (req, res) =>{
//     res.json(books)
// })


// app.get('/api/books/:id', (req, res) => {
//     res.json([0])
//   })

//   app.get('/books', (request, response) => {
//     response.json(books)
//   })


app.use((req, res )=>{
    res.status(404).json({message: "Not found"})
})



app.listen(3001, console.log('server is running'))

// ПЕРЕНОСИМ ВСЕ ВЫЗОВЫВ ОТДЕЛЬНЫЙ ФАЙЛ-ПАПКУ
// // получение всех книг
// app.get('/api/books', (req, res) =>{
//     res.json(books)
// })

// )
// // получение книг по ID
// app.get("/api/books/:id",  (req, res)=>{
//     res.json(books[0])
// })

// // // добавление книги
// app.post("/api/books",  (req, res)=>{
//     res.json(books[0])
// })

// // // изменение по ид
// app.put("/api/books/:id",  (req, res)=>{
//     res.json(books[0])
// })

// // // удаление книг по ид

// app.delete("/api/books/:id",  (req, res)=>{
//     res.json(books[0])
// })

// app.listen(3001, console.log('server is running'))