// создать сервер
const express = require('express')
// запустить сервер
const app = express()

const cors = require('cors')
//  генерирует уникальные идентификаторы (UUID).
const uuid = require('uuid').v4
// для работы с файловой системой в Node,  promises добавляет поддержку промисов для асинхронных операций
const fs = require('fs').promises

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
app.get('/users', async (req, res) => {
  try {
    // Чтение содержимого файла 'models.json'
    const data = await fs.readFile('models.json')
    // Парсинг JSON-строки в JavaScript-объект (массив пользователей)
    const users = JSON.parse(data)

    // Формирование JSON-ответа с массивом пользователей
    const response = {
      msg: 'Success',
      users,
    }

    // Отправка JSON-ответа клиенту
    res.status(200).json(response)
  } catch (error) {
    // Обработка ошибки, если возникла ошибка чтения файла
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
})

// получение user по ИД
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params // Получение значения параметра ID из URL

    // Чтение содержимого файла 'models.json'
    const data = await fs.readFile('models.json')
    // Парсинг JSON-строки в JavaScript-объект (массив пользователей)
    const users = JSON.parse(data)

    // Поиск пользователя по ID
    const user = users.find((item) => item.id === id)

    if (!user) {
      // Если пользователь не найден, отправляем ошибку 404
      return res.status(404).json({ error: 'User not found' })
    }

    // Формирование JSON-ответа с найденным пользователем
    const response = {
      msg: 'Success',
      user,
    }

    // Отправка JSON-ответа клиенту
    res.status(200).json(response)
  } catch (error) {
    // Обработка ошибки, если возникла ошибка чтения файла или другая ошибка
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
})

// добавление юзера
app.post('/users', async (req, res) => {
  // методом status указываем любую нужную ошибку => console.log(req.body) => отображения в терминале!!! Тут ответ с backend json
  console.log(req.body)

  res.status(201).json({ msg: 'create' })
  // отправить json
  //   res.status(200).json({ msg: 'kyky' })
  try {
    const { name, year } = req.params
    // validation here need data

    // create user object
    const newUser = {
      name,
      year,
      id: uuid()
    }

    // save data to Data BAse.
    // Чтение данных из файла models.json с использованием метода readFile из модуля fs. Данные считываются в переменную usersDB.
    const usersDB = await fs.readFile('./models.json')
    // Разбор JSON-строки usersDB в объект JavaScript с помощью JSON.parse(). Это позволяет получить массив пользователей из файла
    const users = JSON.parse(usersDB)
    // Добавление нового пользователя newUser в массив users.
    users.push(newUser)
    // Запись массива users обратно в файл models.json с использованием метода writeFile из модуля fs
    // Массив преобразуется в JSON-строку с помощью JSON.stringify() перед записью в файл.
    await fs.writeFile('./models.json', JSON.stringify(users))

    // send response to frontend
    res.status(201).json({
      msg: 'User created',
      user: newUser
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// просмотр
app.get('/ping', async (req, res) => {
  // методом status указываем любую нужную ошибку
  res.status(200).send('<h1>Hello Express</h1>')
  // отправить json
  //   res.status(200).json({ msg: 'kyky' })
})

// инициализ сервера SERVER INIT
app.listen(3000, () => {
  console.log(`Server is up and running on port ${3000}`)
})
