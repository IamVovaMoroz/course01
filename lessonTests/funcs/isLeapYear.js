// // const moment = require("moment");
// // const dateFns = require("date-fns");

// const isLeapYear = (year)=> {

//     // if(year === undefined) {
//     //     throw new Error('year must be exist')
//     // }

//     // if(typeof year !== "number") {
//     //     throw new Error('year must be number')
//     // }

//     // if(!Number.isInteger(year)) {
//     //     throw new Error('year must be integer')
//     // }

//     // if(year < 42) {
//     //     throw new Error('year must 42 or more');
//     // }
// // верни мне нулевой день марта, он возращает сколько дней в марте(последний день 29 или 28)
//     const date = new Date(year, 2, 0);
//     // вени сколько дней в феврале
//     const days = date.getDate();
//     // возвращаем результат сравнения, если 29 - true (высокосный), false - не высокостный
//     return (29 === days);
// }

// module.exports = isLeapYear;

const isLeapYear = (year)=> {

    if(year === undefined) {
        throw new Error('year must be exist')
    }

    if(typeof year !== "number") {
        throw new Error('year must be number')
    }

    if(!Number.isInteger(year)) {
        throw new Error('year must be integer')
    }

    if(year < 42) {
        throw new Error('year must 42 or more');
    }

    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return (29 === days);
}

module.exports = isLeapYear;