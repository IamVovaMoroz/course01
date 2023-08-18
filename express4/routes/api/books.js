// books.js
// создаём часть вед сервера , а не весь как в app. Вынесли все маршруты в отдельный файл , касающиеся books/ Маршруты по которым будут происодить вызовы

const express = require('express')

// const books = require('../../../express2/books')
const books = require('../../library')

// const app = express() вместо этого
// Делаем дополнительные маршруты к app, черз создание router
const router = express.Router()

// получение всех книг и меняет app на router
// app.get("/api/books", (request, response)=>{
//     response.json(books)
// }

router.get('/', (request, response) => {
  response.json(books)
})
// получение книг по ID
router.get('/:id', (request, response) => {
  response.json(books[0])
})

// добавление книги
router.post('/', (request, response) => {
  response.json(books[0])
})

// изменение по ид
router.put('/:id', (request, response) => {
  response.json(books[0])
})

// Если мы указали в основной файле app маршрут =>  app.use("/api/books", booksRouter), то в дополнительном все маршруты можем сократить

// router.delete('/:id', (request, response) => {
//   response.json(books[0])
// })

// удаление книг по ид

router.delete('/:id', (request, response) => {
  response.json(books[0])
})

module.exports = router

// const express = require('express')
// const books = require('../../library')

// const router = express.Router()

// // получение всех книг
// router.get('/', (request, response) => {
//   response.json(books)
// })

// // получение книги по ID
// router.get('/:id', (request, response) => {
//   const bookId = parseInt(request.params.id)
//   const book = books.find((book) => book.id === bookId)
//   if (book) {
//     response.json(book)
//   } else {
//     response.status(404).json({ error: 'Book not found' })
//   }
// })

// // добавление книги
// router.post('/', (request, response) => {
//   // Code to add a new book
// })

// // изменение книги по ID
// router.put('/:id', (request, response) => {
//   // Code to update a book
// })

// // удаление книги по ID
// router.delete('/:id', (request, response) => {
//   // Code to delete a book
// })

// module.exports = router
