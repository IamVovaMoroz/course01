const mongoose = require('mongoose')


const DB_HOST = "mongodb+srv://VolodymyrMoroz:NOni01041983@cluster0.oyfrio4.mongodb.net/books_base"

mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST).then(()=> console.log("Database connect success")).catch(error => console.log(error.message))