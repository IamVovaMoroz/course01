// const english = require("./languages/english");
// // дефолтный импорт
// english();

// // // 1 способ именной
// // const multi = require("./languages/french");
// // // именной импорт
// // multi.fetch();
// // multi.french();

// // 2 способ именной через деструктуриз
// const {fetch, french} = require("./languages/french");
// multi.fetch();
// multi.french();


// 3 import . from index.js(3 const) in languages (re-export) 

// const {english, fetch, french} = require("./languages");

// english();
// fetch();
// french();

// 4 type  (re-export, looks differently than option 4. works the same )
// const languages = require("./languages");

// languages.english();
// languages.fetch();
// languages.french();

