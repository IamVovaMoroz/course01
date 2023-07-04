


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
// использовать не асинхронные версии, чтобы не ждать окончания действия
// pathToFile files\books\books.txt    =>>>>>  path.join("files", "books", "books.txt") обьединил и получаем рез через черточку
const pathToFile = path.join("files", "books", "books.txt")
console.log('pathToFile', pathToFile)
// fs.readFile()
}catch(err){
console.log('err', err)
}
}
readWriteExample()