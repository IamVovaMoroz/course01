// user.Controller.js другое название

//  генерирует уникальные идентификаторы (UUID).
const uuid = require('uuid').v4
// для работы с файловой системой в Node,  promises добавляет поддержку промисов для асинхронных операций
const fs = require('fs').promises

const getUsers = async (req, res) => {
  try {
    // Чтение содержимого файла 'models.json'
    const data = await fs.readFile('models.json')
    // Парсинг JSON-строки в JavaScript-объект (массив пользователей)
    const users = JSON.parse(data)

    // Формирование JSON-ответа с массивом пользователей
    const response = {
      msg: 'Success',
      users
    }

    // Отправка JSON-ответа клиенту
    res.status(200).json(response)
  } catch (error) {
    // Обработка ошибки, если возникла ошибка чтения файла
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

const getUserById = async (req, res) => {
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
      user
    }

    // Отправка JSON-ответа клиенту
    res.status(200).json(response)
  } catch (error) {
    // Обработка ошибки, если возникла ошибка чтения файла или другая ошибка
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

const createUser = async (req, res) => {
  // методом status указываем любую нужную ошибку => console.log(req.body) => отображения в терминале!!! Тут ответ с backend json
  console.log(req.body)

  res.status(201).json({ msg: 'create' })
  // отправить json
  //   res.status(200).json({ msg: 'kyky' })
  try {
    const { name, year } = req.body
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
}

// Функция для обновления пользователя по ID
const updateUserById = async (req, res) => {
  try {
    const { id } = req.params
    const { name, year } = req.body

    const data = await fs.readFile('models.json')
    const users = JSON.parse(data)

    const userIndex = users.findIndex((item) => item.id === id)

    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Обновляем данные пользователя
    users[userIndex].name = name
    users[userIndex].year = year

    // Записываем обновленный массив пользователей в файл
    await fs.writeFile('./models.json', JSON.stringify(users))

    const response = {
      msg: 'User updated',
      user: users[userIndex]
    }

    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

// Функция для удаления пользователя по ID
const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params

    const data = await fs.readFile('models.json')
    const users = JSON.parse(data)

    const userIndex = users.findIndex((item) => item.id === id)

    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Удаляем пользователя из массива
    const deletedUser = users.splice(userIndex, 1)[0]

    // Записываем обновленный массив пользователей в файл
    await fs.writeFile('./models.json', JSON.stringify(users))

    const response = {
      msg: 'User deleted',
      user: deletedUser
    }

    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

// Экспорт всех функций контроллера в объекте
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById
}
