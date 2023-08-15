//1) СОЗДАЕМ  сервер
const express = require('express')

// const users  = require("./users/users")

// const {users}  = require("./users")
const users  = require("./users")

console.log(users)

const fs = require("fs/promises")

const fileOperat = async()=>{
  // получаем буфер закодированный текст
  const buffer = await fs.readFile("./users/files/files.txt")
// переводим в строку
  const result = buffer.toString()

  // console.log(buffer)
  // console.log(result)
// аторой способ указываем сразу fs.readFile первый аргумент путь.,  второй аргусмент "utf-8"
const utf8 = await fs.readFile("./users/files/files.txt", "utf-8")
console.log(utf8)


}

fileOperat()

// додавить инфу в файл
const fileAddText = async()=>{
  // получаем буфер закодированный текст
  const result = await fs.appendFile("./users/files/files.txt",  " я добавил текст")

// console.log(result)
}

fileAddText()

// перезаписать
const filereplace = async()=>{
  // получаем буфер закодированный текст
  const result = await fs.writeFile("./users/files/files.txt",  " я перезаписал текст, старое стер")

console.log(result)
}

filereplace()


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
  console.log(request.url, '=>  /books')
  console.log(request.method, '=> get')
  response.send('<h2>books page<h2>')
})


//3) ЗАПУСК сервера listen(3000) listen - метод для запуска, 3000 - где находится будет port
app.listen(3000, () => console.log('server running '))
