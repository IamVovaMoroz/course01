// создание веь сервера
const express = require('express')

const books = require('./books')
// запуск
const app = express()

app.get('/books', (request, response) => {
  // чтобы передать массив или обьект в формате json -  res.send(books) (передать send), он создаст в формате json
  // 1 способ, не обрабатывает null
//   response.send(books)
  // 2 способ, более правильный
  response.json(books)
})

app.listen(3000, console.log('server running'))

// // для просмотра запросов postman



