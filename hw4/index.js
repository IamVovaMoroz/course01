const jwt = require('jsonwebtoken')

// строка дляшифрования
require('dotenv').config()
// берем строку SECRET_KEY из env ( SECRET_KEY="StrongK3yW!thSpec!alCharacters2023"  )
const {SECRET_KEY} = process.env

// payload(инфо про пользователя) - ID пользователя чаще всего

const payload = {
    id: "64ba88293eef33a1f61632e7"
}
// данные пользователя payload + SECRET_KEY + обьект настроек expiresIn: "23h" время жизни токена
//  1 часть токена закодир заголовок, 2 часть закодированный payload + 3 часть все это закодированное секретным ключём
const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"})

console.log(token)

// раскодируем токен , записываем в переменную jwt с методом decode , вставляя туда токен

const decodeToken = jwt.decode(token)
console.log(decodeToken)

// проверяем токен от фронтэнда/ Проверит шифровали ли мы токен этим секретным ключем и не закончился ли срок действия. id - payload
try {
    const {id} = jwt.verify(token, SECRET_KEY)
    console.log(id)
    // проверим токен не шифрованный секретным ключем 1) ошибка при не верном токене обшибка 401
    // const invalidToken = '!eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmE4ODI5M2VlZjMzYTFmNjE2MzJlNyIsImlhdCI6MTY5MDU0NzA0OSwiZXhwIjoxNjkwNjI5ODQ5fQ.mMV4dMNwisWhzzvD2dJ_rrLtVBnO3pUSeolDENgkVas'
    // const badResult = jwt.verify(invalidToken, SECRET_KEY)
// проверим верный токен 
const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmE4ODI5M2VlZjMzYTFmNjE2MzJlNyIsImlhdCI6MTY5MDU0NzA0OSwiZXhwIjoxNjkwNjI5ODQ5fQ.mMV4dMNwisWhzzvD2dJ_rrLtVBnO3pUSeolDENgkVas'
const goodResult = jwt.verify(validToken, SECRET_KEY)

}catch(error){
    console.log(error.message)
};