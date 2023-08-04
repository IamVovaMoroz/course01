

// /**
//  * Начинаем написание ТЕСТА а набора-описания тестовых данных
//  * 1. Function get integer
//  * 2. Return tue if year is leap(высокосный год) or false if not
//  * 3. If given not valid argument throw error with message
//  * Как проверить высокосный год . Год/4 без остатка
//  * 2008 - true (высокосный)
//  * 2003 - false 
//  * 1900 - false ( если год также делится на 100 без остатка, то это не высокосный год.)
//  * 2000 - true (Делится на 4, но делится и на 100. Но  если год делится на 400 без остатка, то он всё равно является высокосным.)
//  * 
//  * if 41 - error 'year must be 42 or more'
//  * 
//  * if 2008.4 - error "year must be integer "  хотя ожидаем только integer целое число
//  * 
//  * () - if we dont have argument - error "year must be exist"
//  * "2008" if string - error "year must be number"
//  * null - error "year must be number"
//  * true - - error "year must be number"
//  * false - - error "year must be number"
//  * ()=>{} - if function - - error "year must be number"
//  * [] - error "year must be number"
//  * {} - - error "year must be number"
//  */

// // импортируем в тест функцию
// const isLeapYear = require('./isLeapYear')
// // describe создает группу тестов 1 how we call function, 2 call back with our test
// describe("test isLeapYear function", ()=>{
//     // "2008 - true" - we cal funct, isLeapYear(2008) we call the function and it returns result
//     test ("2008 - true", ()=>{
//         const result = isLeapYear(2008)
//         expect(result).toBe(true)

//         test("2008 - true", ()=>{
//             expect(isLeapYear(2008)).toBe(true);
//         })
//         // const expect = result => {return {result, toBe(value){return this.result === value}    } }

// // мы передаем в expect результат. Он оборачивает его в обьект, где много функций проверки

// // Если это срабатывает, то тест пройден   expect(result).toBe(true)

// test("2003 - false", ()=> {
//     expect(isLeapYear(2003)).toBe(false);
// })

// it("1900 - false", ()=> {
//     expect(isLeapYear(1900)).toBe(false);
// })

// test("2000 - true", ()=> {
//     expect(isLeapYear(2000)).toBe(true);
// })




//     })
// })

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=> {
    test("2008 - true", ()=> {
        const result = isLeapYear(2008);
        expect(result).toBe(true);
        /*
        const expect = result => {
            return {
                result,
                toBe(value) {
                    return this.result === value;
                }
            }
        }
        */
    })

    test("2003 - false", ()=> {
        expect(isLeapYear(2003)).toBe(false);
    })

    it("1900 - false", ()=> {
        expect(isLeapYear(1900)).toBe(false);
    })

    test("2000 - true", ()=> {
        expect(isLeapYear(2000)).toBe(true);
    })

    test("41 - error 'year must 42 or more'", ()=> {
        expect(() => isLeapYear(41)).toThrow('year must 42 or more');
    })
// если функция выкидывает ошиьку в кол бек отправляем toThrow есть ли ошибка и message проверяем и записываем это в функции какую ошибку выкинет, чтобы прочитать потом
    test("2008.4 - error 'year must be integer'", ()=> {
        expect(() => isLeapYear(2008.4)).toThrow('year must be integer');
    })

    test("() - error 'year must be exist'", ()=> {
        expect(() => isLeapYear()).toThrow('year must be exist');
    })

    test("'2008' - error 'year must be number'", ()=> {
        expect(() => isLeapYear('2008')).toThrow('year must be number');
    })

    test("null - error 'year must be number'", ()=> {
        expect(() => isLeapYear(null)).toThrow('year must be number');
    })

    test("true - error 'year must be number'", ()=> {
        expect(() => isLeapYear(true)).toThrow('year must be number');
    })

    test("false - error 'year must be number'", ()=> {
        expect(() => isLeapYear(false)).toThrow('year must be number');
    })

    test("()=>{} - error 'year must be number'", ()=> {
        expect(() => isLeapYear(()=>{})).toThrow('year must be number');
    })

    test("{} - error 'year must be number'", ()=> {
        expect(() => isLeapYear({})).toThrow('year must be number');
    })

    test("[] - error 'year must be number'", ()=> {
        expect(() => isLeapYear([])).toThrow('year must be number');
    })
})