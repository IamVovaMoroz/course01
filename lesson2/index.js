const { program } = require('commander')
const fs = require('fs').promises
const readline = require('readline')
const colors = require('colors')

// program.option("-f, --file")  сделать флаг 2 варианта

// -f, --file <type>: Здесь -f - это короткое имя опции, --file - это длинное имя опции, <type> - это описание аргумента, который ожидается после опции. Например, если вы запускаете программу в командной строке с флагом -f test.txt, то test.txt будет значением аргумента <type>.
// "file for saving game results": Это описание опции, которое будет отображаться в справке программы или при использовании флага --help. В данном случае, описание говорит о том, что опция используется для указания файла, в котором будут сохраняться результаты игры.
// "game_results.txt": Это значение по умолчанию для опции. Если при запуске программы не указан аргумент после опции, то будет использоваться это значение. В данном случае, если не указан файл, то по умолчанию будет использоваться файл с именем "game_results.txt".

program.option(
  '-f, --file <type>',
  'file for saving game results',
  'game_results.txt'
)

// Массив process.argv включает путь к исполняемому файлу
program.parse(process.argv)

// разные цвета при выводе в консоли от colors
// console.log("This is".green, "a".yellow, "colored".blue, "text".red);

// readline в Node.js для создания интерфейса
// Сначала мы создаем интерфейс rl с помощью функции readline.createInterface()
// process.stdin,  означает чтение ввода из стандартного потока ввода (консоль).
// output: указывает, куда будет выводиться информация.  стандартный поток вывода (консоль).

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// ДЛЯ ПРИМЕРА FOR EXAMPLE

// добавляем обработчик события "line" для интерфейса rl. Это событие возникает каждый раз, когда пользователь вводит строку и нажимает клавишу Enter.
// нутри обработчика события мы получаем значение введенной строки в переменную a, а затем выводим ее с помощью console.log()
// для остановки CTR+ C
// rl.on("line", (txt) => {
// console.log( ` You have entered this text ${txt}`.red)
// // для 1 раза сработало чтобы
// process.exit()
// } )

// GAME LOGIC
// Counter of user attempts
// сколько раз вводил пользователь
let counter = 0

// число которое загадана
const mind = Math.ceil(Math.random() * 10)

// путь к файлу, где очки будут сохраняться

// const logFile = program.opts().file используется для получения значения аргумента, переданного в опцию --file с помощью метода .opts() объекта program.
// .opts() для объекта program, чтобы получить доступ к опциям, определенным с помощью .option().
// --file. Если аргумент был передан при запуске программы (например, node index.js -f myFile.txt), то program.opts().file вернет значение "myFile.txt". Если аргумент не был передан, то будет использовано значение по умолчанию, указанное в третьем аргументе .option().
const logFile = program.opts().file

// input datd validator @param {number} num - value to validator, @returns {boolean}

const isValid = num => {
  if (!Number.isNaN(num) && num > 0 && num <= 10) return true

  if (Number.isNaN(num)) console.log("Please, enter a number!".red)

  if(num <1 || num > 10) console.log("Number should be between 1 and 10".red)
  return false
}

/**
 * Game results into the text file
 */


// main game process

const game = () => {
  // rl.question() используется для задания вопроса пользователю и получения ответа. В данном случае, вопрос выводится в консоль с помощью строки "Please, enter any number between 1 and 10\n".green. Функция .green из модуля colors применяется к строке для отображения текста зеленым цветом.
  // функцию обратного вызова (value) => { ... }, которая будет вызвана с аргументом value, содержащим введенное пользователем значение.
  rl.question('Please, enter any number between 1 and 10\n'.green, value => {
    //    convert type of text to number // +value  сделает число
    // const number = parseInt(value, 10);  старый вариант
    const number = +value
    if (!isValid(number)) return game()

    // counter +=1

    counter++
    // if number is not right (не соответствует загаданому)
    if (number !== mind) {
      console.log('Oh no! Try again'.red)
      // выходим и перезапускаем игру
      return game()

      // f number is correct
    }
    console.log(
      `Congratulations! You guessed number in ${counter} step(s)`.green
    )
    rl.close()
  })
}

game()
