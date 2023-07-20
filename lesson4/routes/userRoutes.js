// userRouters.js
const { Router } = require('express')

const router = Router()

const userController = require('../controllers/userController')



// получение user по ИД
router.get('/:id', userController.getUserById)

// удадение user по ИД
router.delete('/:id', userController.deleteUserById)

// обновление user по ИД
router.put('/:id', userController.updateUserById)

// добавление юзера userController.createUser (userController - папка, createUser - назв. перемен )

// можно добавлять тут middleware после маршрута перед контролерром

// router.post('/', middleware, userController.createUser)
router.post('/', userController.createUser)

// просмотр
// router.get('/ping', (req, res) => {
//   // методом status указываем любую нужную ошибку
//   // res.status(200).send('<h1>Hello Express</h1>')
//   // отправить json
//   throw new Error('Bad error')

//   // res.status(200).json({ msg: 'kyky' })
// })

module.exports = router
