// app.js

// const books = require("../index")

// меняем если переносим в папку
const books = require("./books/index")



const invokeAction = async ({action, id, title, author}) => {
switch(action){
    case "read":
        // в перем allBooksзаписываем результат вызова функции, которая делает работу с json. 
        const allBooks = await books.getAll()
        // результат в консоль
        return console.log(allBooks)


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


}


}
// передаём обьект со свойством read , получить все книги
// invokeAction({action: "read"})

//  получить книгу по id
// invokeAction({action: "getById", id : 1})

// добавить книгу
// invokeAction({action: "add", title : "Book for you", author: "D. Moroz"})

// обновить данные книги. Передаем все данные
// invokeAction({action: "updateById", id: 2, title : "New Book Title", author: "D. Moroz"})

//  удалить книгу по id
invokeAction({action: "deleteById", id : 2})


