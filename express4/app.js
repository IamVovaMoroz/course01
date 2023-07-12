// app.js

const express = require('express')
const cors = require('cors')

// ДЛЯ ИМПОРТА ЧАСТИ С СЕРВЕРА ROUTES
//1) импортирует часть сервера в основной
// const booksRouter = require('./routes/api/books')
const booksRouter = require('./routes/api/books')

const books = require('./library')
const app = express()

app.use(cors())

//2) указываем серверу, где все маршруты с api books нужно искать. Т.е при любом запросе с /api/books ищи его обработчик здесь => booksRouter

app.use('/api/books', booksRouter)

// app.get('/products', (request, response) => {
//     response.json([])
//   })

//   app.get('/books', (request, response) => {
//     response.json(books)
//   })

app.listen(3001, console.log('server is running'))

// ПЕРЕНОСИМ ВСЕ ВЫЗОВЫВ ОТДЕЛЬНЫЙ ФАЙЛ-ПАПКУ
// // получение всех книг
// app.get("/api/books", (request, response)=>{
//     response.json(books)
// }

// )
// // получение книг по ID
// app.get("/api/books/:id",  (request, response)=>{
//     response.json(books[0])
// })

// // добавление книги
// app.post("/api/books",  (request, response)=>{
//     response.json(books[0])
// })

// // изменение по ид
// app.put("/api/books/:id",  (request, response)=>{
//     response.json(books[0])
// })

// // удаление книг по ид

// app.delete("/api/books/:id",  (request, response)=>{
//     response.json(books[0])
// })
