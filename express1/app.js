//1) СОЗДАЕМ  сервер
const express = require('express')
// clear
// app - веб сервер при вызванном express()
const app = express()

// 2) ЗАПОЛНЯЕМ что делать где
// отображаем что при каких запросах отображать
// если придёт запрос на главные адрес "/",, выполни функцию (request, response)=> {...} request - отправка запроса, response - отправка ответа
app.get('/', (request, response) => {
  response.send('<h2>Home page<h2>')
})
// если придёт запрос на главные адрес "/books",  выполни функцию (request, response)=> {...}
app.get('/books', (request, response) => {
  console.log(request.url, "=>  /books")
  console.log(request.method, "=> get")
  response.send('<h2>books page<h2>')
})

//3) ЗАПУСК сервера listen(3000) listen - метод для запуска, 3000 - где находится будет port
app.listen(3000, () => console.log('server running '))
