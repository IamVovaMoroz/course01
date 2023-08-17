const express = require('express')
//1) для добавления времени когда был запрос
const moment = require('moment')
const fs = require('fs/promises')
// для запуска кросдоменных запросов с 1 компа
const cors = require('cors')

const books = require('../express2/books')

const app = express()

// вызов cors 1 способ
// const corsMiddleware = cors()
// // все запросы пропускаем через corsMiddleware, если с другого домена - будет разрешать
// app.use(corsMiddleware)

// 2 способ сокращенный
app.use(cors())

// добавляем в middlware  функцию для любого запроса работает

// app.use((request, response, next) => {
//     // просто выводит в консоле middleware here но если не задали  response - ничего не приходит в ответ без вызова next()
//   console.log(' middleware here')
// //   ставим next() для продолжения работы express
//   next()
// })

app.use(async (request, response, next) => {
  // выполняется при любом запросе
  console.log("сработал главный мидлваре")
  // метод и url берём с request
  // 2) для добавления времени когда был запрос
  const { method, url } = request
  const date = moment().format('DD-MM-YYYY_hh:mm:ss')
  // //    записываем информацию в файл и идёт дальше ext
  await fs.appendFile('./server.log', `\n${method} ${url} ${date}`)

  next()
})

app.get('/products', (request, response) => {
  response.json([])
})

app.get('/books', (request, response) => {
  response.json(books)
})

// ставим в конце для отображения ошибки, что нет такой страницы в формате json. Когда пройдёт все app и ничего не нашёл, срабаытвает последний
// если адрес есть, то остановится на соответсвующей, если нет то сработает {message: "Not found"}
app.use((request, response) => {
  response.status(404).json({ message: 'Not found' })
})

app.listen(3000, console.log('server is running'))
