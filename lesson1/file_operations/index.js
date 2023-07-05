


// остановит процесс 
// console.log('process.exit()', process.exit()) 


// setTimeout(()=>{
// console.log('timer')

// }, 3000)
// путь к папке
// console.log('__dirname', __dirname)
// // путь к файлу
// console.log('__filename', __filename)

// информация по серверу

// аналог информации много  по серверу

// console.log('process.env', process.argv)
// директория точная и инфа
// console.log('process.cwd()', process.cwd())

// p
// console.log('process.exit()', process.exit())


// 

// global <ref *1> Object [global] {
//     global: [Circular *1],
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     structuredClone: [Function: structuredClone],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     atob: [Function: atob],
//     btoa: [Function: btoa],
//     performance: Performance {
//       nodeTiming: PerformanceNodeTiming {
//         name: 'node',
//         entryType: 'node',
//         startTime: 0,
//         duration: 39.767999947071075,
//         nodeStart: 2.8901999592781067,
//         v8Start: 6.555799961090088,
//         bootstrapComplete: 29.360199987888336,
//         environment: 15.499799966812134,
//         loopStart: -1,
//         loopExit: -1,
//         idleTime: 0
//       },
//       timeOrigin: 1688484484329.643
//     },
//     fetch: [AsyncFunction: fetch]
//   }

/**@returns */


const fs = require("fs").promises
const path = require("path")

const readWriteExample = async()=>{
try{
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++== Read files
// использовать не асинхронные версии, чтобы не ждать окончания действия
// pathToFile files\books\books.txt    =>>>>>  path.join("files", "books", "books.txt") обьединил и получаем рез через черточку
const pathToFile = path.join("files", "books", "books.txt")
// console.log('pathToFile', pathToFile)


// await fs.readFile(pathToFile)  ожидаем файл и в скобках какой читать
const readResult = await fs.readFile(pathToFile)
// console.log('pathToFile', pathToFile)
// возвращается <Buffer закодированные данные, не в виде видео или музыки а Buffer
// console.log('readResult', readResult)

// после этого раскодируем его
const txt = readResult.toString("utf8")
// node index.js

// директория где файлы
const dir = "files"
// console.log('dir', dir)

const listDirContent = await fs.readdir(dir)
// listDirContent [ 'books' ] директория показал / все папки что есть в данном месте. чтение содержимого директории с помощью функции fs.readdir, которая ожидает путь к директории и возвращает массив имен файлов и поддиректорий в указанной директории.
// console.log('listDirContent', listDirContent)

const dirStat = await fs.lstat(dir)
// директория или файл узнать/ если файл - true, если нет - false
// console.log('dirStat', dirStat.isDirectory())
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ read json

// проложили путь через path.join
 const patchToJson = path.join("files", "books", "simple.json")
// прочитали файл через await fs.readFile
 const jsonResult =  await fs.readFile(patchToJson)
// распарсили JSON.parse
 const json = JSON.parse(jsonResult)
// делаем запись в json, добавили
json.e = "ad new object "

// создали новый файл JSON
await fs.writeFile("new JSON NOW", JSON.stringify(json))


 console.log('json', json)
//  console.log('jsonResult', jsonResult)
}catch(err){
console.log('err', err)
}
}
readWriteExample()