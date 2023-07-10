// app.js
const { program } = require('commander');
// const books = require("../index")

// меняем если переносим в папку
const books = require("./books/index")



// const yargs = require("yargs")
// const {hideBin} = require("yargs/helpers")



const invokeAction = async ({action, id, title, author}) => {
switch(action){
    case "read":
        // в перем allBooksзаписываем результат вызова функции, которая делает работу с json. 
        const allBooks = await books.getAll()
https://www.youtube.com/watch?v=jOGaUSp_Aq8        // результат в консоль
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


program
.option("--action, <type>")
.option("--id, <type>")
.option("--title, <type>")
.option("--author, <type>")

program.parse()
const options = program.opts()
invokeAction(options)

// // передаём обьект со свойством read , получить все книги
// invokeAction({action: "read"})

// //  получить книгу по id
// invokeAction({action: "getById", id : 4})

// // добавить книгу
// invokeAction({action: "add", title : "Book for you1", author: "D. Moroz1"})

// // обновить данные книги. Передаем все данные
// invokeAction({action: "updateById", id: 11, title : "New Book Title", author: "D. Moroz1"})

// //  удалить книгу по id
invokeAction({action: "deleteById", id : 4})


// ДЛЯ ТОГО ЧТОБЫ ОТПРАВЛЯТЬ КОМАНДЫ ЧЕРЕЗ КОМАНДНУЮ СТРОКУ 1 СПОСОБ

// то что пишем в командной строке node сохраняет в process.argv
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
// const  arr = hideBin(process.argv)
// console.log(arr)


// const {argv} = yargs(arr)
// console.log(argv)
// const { program } = require('commander');
// const books = require("./books/index");



// const invokeAction = async ({ action, id, title, author }) => {
//   switch (action) {
//     case "read":
//       const allBooks = await books.getAll();
//       return console.table(allBooks);

//     case "getById":
//       const oneBook = await books.getById(id);
//       return console.log(oneBook);

//     case "add":
//       const newBook = await books.add({ title, author });
//       return console.log(newBook);

//     case "updateById":
//       const updateBook = await books.updateById(id, { title, author });
//       return console.log(updateBook);

//     case "deleteById":
//       const deleteBook = await books.deleteById(id);
//       return console.log(deleteBook);

//     default:
//       return console.log("unknown action");
//   }
// };

// program
// // все аргументы из invokeAction вначале передаем (--action, --id...)
//   .option("--action <type>")
//   .option("--id <type>")
// //   .option("--id <id>")
//   .option("--title <type>")
//   .option("--author <type>")
//   program.parse();


// const options = program.opts();
// invokeAction(options);
// // if (!options.action) {
//   console.log("Please provide a valid action.");
// } else {

//   invokeAction(options);
// }
// if (!options.action) {
//     console.log("Please provide a valid action.");
//   } else {
//     options.id = parseInt(options.id); // Преобразование строки в число
//     invokeAction(options);
//   }

// const { program } = require('commander');
// const books = require("./books/index");

// program
//   .option("--action <type>")
//   .option("--id <type>")
//   .option("--title <type>")
//   .option("--author <type>")
//   .parse();

// const invokeAction = async ({ action, id, title, author }) => {
//   switch (action) {
//     case "read":
//       const allBooks = await books.getAll();
//       return console.table(allBooks);

//     case "getById":
//       const oneBook = await books.getById(id);
//       return console.log(oneBook);

//     case "add":
//       const newBook = await books.add({ title, author });
//       return console.log(newBook);

//     case "updateById":
//       const updateBook = await books.updateById(id, { title, author });
//       return console.log(updateBook);

//     case "deleteById":
//       const deleteBook = await books.deleteById(id);
//       return console.log(deleteBook);

//     default:
//       return console.log("unknown action");
//   }
// };

// const options = program.opts();

// if (!options.action) {
//   console.log("Please provide a valid action.");
// } else {
//   options.id = parseInt(options.id); // Преобразование строки в число
//   invokeAction(options);
// }
