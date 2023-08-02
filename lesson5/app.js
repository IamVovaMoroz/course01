const express = require('express')

const cors = require('cors')

const multer = require('multer')
// для создания пути к временной папке
const path = require('path')

// за все операции с файлами отвечает пакет fs
const fs = require('fs/promises')

// для загрузки текстового и сохранияния добавить ид нужно 
// const {nanoid} = require('nanoid');
const { v4: uuidv4 } = require('uuid');

const app = express()

app.use(cors())

app.use(express.json())

// используем middleware для доступа у файлу с фротенда
// если придёт запрос на статический файл ищи его в папке public. Даём доступ брать его. При запросе её не указываем но создаем в коде
app.use(express.static('public'))

// путь к временной папке // все файлы будут сохраняться здесь

const tempDir = path.join(__dirname, "temp")
// console.log(tempDir)
const multerConfig = multer.diskStorage({
    // destination - путь к временной папке передаём
    destination: tempDir,
    // если нужно сохранять в базе не под тем именем что пришло используем это , но originalname - это сохранение под тем же
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

// создаем миддваре для сохранения данных/ Теперь этот мидваребудет сохранять файлы под ориг именем

const upload = multer({
    storage: multerConfig
})

const books = [];

app.get("/api/books", (req,res) => {
    res.json(books)
})
// в поле cover(картинки) мы ожидаем 1 файл поэтому upload.single => в папку temp, а все остальные поля будут текстовыми и записываем их в req.body => req.file файл с инфо о нём

// если ожидаем многофайлов загрузки в одном поле!!!, записываем так: upload.array("cover", 9) кол-во макс файлов 9
// app.post("/api/books", upload.array("cover", 9), async(req, res) =>  {


// если ожидаем в разных полях много файлов загрузки, то upload.fields([{name: "cover", maxCount: 1}, {name: "subcover", maxCount: 2}, ]) где maxCount: 1 максимальное кол-во файлов 


// создаем путь куда отправлять ФАЙЛ
const booksDir = path.join(__dirname, "public", "books")



app.post("/api/books", upload.single("cover"), async(req, res) =>  {
// originalname - имя под которым сохраняем как пришло, tempUpload - путь откуда приходит файл
    const { path: tempUpload, originalname} = req.file;

// создаем новый путь + имя указываем какое
const resultUpload = path.join(booksDir,originalname )

// загрузка по указанному путь файла
await fs.rename(tempUpload, resultUpload)

// загрузка тектового . Ид с помощью нано ид + путь нужен 
// путь для текстового контента относительный
// public удаляем при использовании middleware app.use(express.static('public'))
// const coverText = path.join("public", "books", originalname)

const coverText = path.join( "books", originalname)
//  обьет с ид
const newBook = {
    id: uuidv4(),
...req.body,
coverText
}
// пушим книгу http://localhost:3000/api/books
books.push(newBook)
// возврат ответ книгу
res.status(201).json(newBook)
    // для перемещения файла используем fs.rename 1) это старый путь к файлу с именем 2) новый путь с именем
// await fs.rename("./temp/1672328579533.jpg", "./public/books/1672328579533.jpg")
   
// multer сохраняет во временную папку и передает информацию, где он сохранил его.
// а контролер уже указывает где сохранить. Или в облаке (cloudinary.com - npm поставить) или на компе


// console.log(req.body)
    // console.log(req.file)
    
  
})

app.listen(3000, console.log(`Server is up and running on port 3000`))


// [Object: null prototype] { title: 'Super book', author: 'Foglio' }  информацуя по body console.log(req.body)

// console.log(req.file) 
// {
//     fieldname: 'cover',
//     originalname: '1672328579533.jpg',
//     encoding: '7bit',
//     mimetype: 'image/jpeg',
//     destination: 'C:\\Users\\user\\Desktop\\Node.js classes\\course01\\lesson5\\temp',
//     filename: '1672328579533.jpg',
//     path: 'C:\\Users\\user\\Desktop\\Node.js classes\\course01\\lesson5\\temp\\1672328579533.jpg',
//     size: 926793
//   }
  