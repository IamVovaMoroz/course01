// app.js

// const books = require("../index")

// меняем если переносим в папку
const books = require("./books/index")



const yargs = require("yargs")
const {hideBin} = require("yargs/helpers")


const invokeAction = async ({action, id, title, author}) => {
switch(action){
    case "read":
        // в перем allBooksзаписываем результат вызова функции, которая делает работу с json. 
        const allBooks = await books.getAll()
        // результат в консоль
        return console.table(allBooks)


        case "getById":
    //    вызывается getById(id) и передается наш id с вызова и сохраняется в  const oneBook
            const oneBook = await books.getById(id)
       
            return console.log(oneBook)

            case "add":  
            const newBook = await books.add({title, author})
            return console.log(newBook)

            case "updateById":
                const updateBook = await books.updateById(id, {title, author})

                return console.log(updateBook)

                case "deleteById":
                    const deleteBook = await books.deleteById(id)
    
                    return console.log(deleteBook)

                    default:
                        return console.log("unknow action")
}
}





// передаём обьект со свойством read , получить все книги
invokeAction({action: "read"})

//  получить книгу по id
// invokeAction({action: "getById", id : 4})

// добавить книгу
// invokeAction({action: "add", title : "Book for you1", author: "D. Moroz1"})

// обновить данные книги. Передаем все данные
// invokeAction({action: "updateById", id: 2, title : "New Book Title", author: "D. Moroz"})

//  удалить книгу по id
// invokeAction({action: "deleteById", id : 3})


// ДЛЯ ТОГО ЧТОБЫ ОТПРАВЛЯТЬ КОМАНДЫ ЧЕРЕЗ КОМАНДНУЮ СТРОКУ 1 СПОСОБ

// // то что пишем в командной строке node сохраняет в process.argv
// console.log(process.argv)
// // --action (начало действия в командной строке, что то хочу сделать)
// const actionIndex = process.argv.indexOf("--action")

// if (actionIndex !== -1){
// // [actionIndex +1]  получаем значение следующее после --action, т.е название действия
//     const action = process.argv[actionIndex +1]
// // console.log(action)

// invokeAction({action})

// }


// получаем первые 2 элемента что ввел пользователь через командную строку
const  arr = hideBin(process.argv)
console.log(arr)


const {argv} = yargs(arr)
console.log(argv)
