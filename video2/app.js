const books = require("./books/index")
// для создания консольного додатка
const yargs = require('yargs')
const {hideBin} = require('yargs/helpers')

const invokeAction = async ({action, id, title, author}) =>{
    switch(action) {
        // вызывается этот метод getAll , который считывает json 
      case  "getAll":
const allBooks = await books.getAll()
return console.log(allBooks)
case  "getById":
    // вызываем функию которая ищет по ид и перезаем тут наше ид при вызове функции
    const oneBook = await books.getById(id)
    return console.log(oneBook) 

case "addBook":
    // функция ожидает  title, author с массива книг и записывает в переменную
    const newBook = await books.addBook({title, author})
    return console.log(newBook)

    case "updateById":
    // функция ожидает  title, author с массива книг и записывает в переменную
    const updateBook = await books.updateById(id, {title, author})
    return console.log(updateBook)

    case "deleteById":
        // функция ожидает  title, author с массива книг и записывает в переменную
        const deleteBook = await books.deleteById(id)
        return console.log(deleteBook)
default:
    return console.log("unknow action")
    }

    
}
//1) при вызове передаем название действия
// invokeAction({action: "read"})
//2) поиск книги по ид
// invokeAction({action: "getById", id: "ckncksclsclsc"})

//3) добавить книгу. Название действия и что сделать(добавить название и автора) 
// action: "addBook" и case "addBook": может быть любой
// invokeAction({action: "addBook", title: "New Book", author: "Daniel M"})

// 4) обновить книгу PUT запрос, перезаписывает всё - передаем все поля поэтому, что изменить и старые
// invokeAction({action: "updateById",  id: "ckncksclsclsc", title: "New Update Book", author: "Daniel Mo"})

//5) delete by id

// invokeAction({action: "deleteById",  id: "ckncksclsclsc"})

// ++++++++++++++++++++ СОЗДАНИЕ КОНСОЛЬНОГО ПРИЛОЖЕНИЯ ЧЕРЕЗ process.argv 1 СПОСОБ +++++++++++++++++++


// для работы через командную строку используем process.argv и делаем консольный додаток
// смотрим есть ли в массиве --action

// const actionIndex = process.argv.indexOf("--action")

// // ищем действие после --action
// if(actionIndex !== -1){
//     const action = process.argv[actionIndex + 1]
    
//     console.log(action) // => getAll  т.е прочитало 2 значение после action. node app --action getAll

//     // Передаем это 2 значение Case в функцию т.е что в терминале 
//     invokeAction({action})
//     // теперь терминал работает node app --action getAll
// }


// +++++++++++++++++++ СОЗДАНИЕ КОНСОЛЬНОГО ПРИЛОЖЕНИЯ ЧЕРЕЗ yargs 2 СПОСОБ +++++++++++++++++++++++++

// для создания консольного додатка используем npm i yargs

const arr = hideBin(process.argv)  // в функцию hideBin закидываем наш (process.argv)

// console.log(arr)  // возвращает [ '--action', 'getAll' ] при вводе в терминале node app --action getAll !!! т.е отрезал 2 элемента массива!!!

const {argv} = yargs(arr) // передаем в yargs наш массив и он делает action: 'getAll' т.е ключём, а getAll - значением этого ключа 

// console.log(argv) // получаем это и можем передать в функцию { _: [], action: 'getAll', '$0': 'app' }
// Но он воспринимает ид цифры как число и не находит, поэтому в коде даписываем при получении bookId в стринг
invokeAction(argv)