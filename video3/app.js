//1) СОЗДАЕМ WEB сервер
const express = require('express')
//2) вызываем express() как функцию , она возвращает веб сервер - app(веб сервер)
const app = express() 

// если придёт запрос на главные адрес "/",, выполни функцию (request, response)=> {...} request - отправка запроса, response - отправка ответа
app.get('/', (request, response) => {
    // когда пришёл запрос, сделай то что ниже. send отправляет ответ на FRONTEND "Home page<"
    response.send('<h2>Home page<h2>')
  })
  // если придёт запрос на главные адрес "/books",  выполни функцию (request, response)=> {...}
  app.get('/books', (request, response) => {
    console.log(request.url, '=>  /books') // /books =>  /books  
    console.log(request.method, '=> get')
    response.send('<h2>books page<h2>')
  })

// 3) запускаем веб сервер
app.listen(3000, () => console.log('server running '))