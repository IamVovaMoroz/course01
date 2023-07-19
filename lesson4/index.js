// создать сервер
const express = require('express')
// запустить сервер

const app = express()

// для работы с .env
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config()

// просмотр папки и переменной
// console.log(process.env.APP_NAME)

const cors = require('cors')
//  генерирует уникальные идентификаторы (UUID).
const uuid = require('uuid').v4
// для работы с файловой системой в Node,  promises добавляет поддержку промисов для асинхронных операций
const fs = require('fs').promises

const userController = require('./controllers/userController')
// для получения доступа к json middleware и отображения в терминале, распарсиваем
// middlewareS
app.use(express.json())

/**
 * CRUD
 * GET          /users - get all users
 * POST         /users - create user
 * GET         /users/id - get user by id
 * PUT/PATCH   /users/id - update user by id
 * DELETE     /users/id - delete user by id
 */

// CONTROLLERS

// 1 вариант
// get users list

// app.get('/users', async (req, res) => {
//   const users = JSON.parse(await fs.readFile('models.json'))

//   res.status(200).json({
//     msg: 'Success',

//     users
//   })
// })

// 2 вариант get users list
app.get(
  '/users',
  // импортируем всю логику
  userController.getUsers
  //  async (req, res) => {
  //   try {
  //     // Чтение содержимого файла 'models.json'
  //     const data = await fs.readFile('models.json')
  //     // Парсинг JSON-строки в JavaScript-объект (массив пользователей)
  //     const users = JSON.parse(data)

  //     // Формирование JSON-ответа с массивом пользователей
  //     const response = {
  //       msg: 'Success',
  //       users
  //     }

  //     // Отправка JSON-ответа клиенту
  //     res.status(200).json(response)
  //   } catch (error) {
  //     // Обработка ошибки, если возникла ошибка чтения файла
  //     console.error(error)
  //     res.status(500).json({ error: 'Server error' })
  //   }
  // }
)

// получение user по ИД
app.get('/users/:id', userController.getUserById)

// удадение user по ИД
app.delete('/users/:id', userController.deleteUserById)

// обновление user по ИД
app.put('/users/:id', userController.updateUserById)

// добавление юзера userController.createUser (userController - папка, createUser - назв. перемен )
app.post('/users', userController.createUser)

// просмотр
app.get('/ping', (req, res) => {
  // методом status указываем любую нужную ошибку
  // res.status(200).send('<h1>Hello Express</h1>')
  // отправить json
  throw new Error('Bad error')

  // res.status(200).json({ msg: 'kyky' })
})

// Для отработки ошибок, чтобы были не дефолтные html ОБЯЗАТЕЛЬНО НА САЙТЕ ДОЛЖЕН БЫТЬ 404 ошибка
app.all('*', (req, res) => {
  res.status(404).json({ msg: 'Oops! Someting weng wrong! Try later ' })
})
// если ошибка на сервере то отлавливает и выводит GLOBAL ERROR 4 аргумента throw new Error('Bad error') ловит
app.use((err, req, res, next) => {
  res.status(300).json({ msg: err.message })
})

// инициализ сервера SERVER INIT с .env переменная или 3000 по умолчанию
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is up and running on port ${3000}`)
})
