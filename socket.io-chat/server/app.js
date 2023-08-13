const {Server} = require("socket.io")
// в ноде встроенный пакет
const {createServer} = require("http")

// создаем http сервер

const httpServer = createServer()

// создаем новый io сервер ws. 1) httpServer  - где будет находится, на его основе 2) обькт настроек

const io = new Server(httpServer, {
    // разрешаем подключение со всех портов
    cors: {origin: "*"}
})

// вешаем слушателя события через io.on
io.on('connection', (socket)=>{

    console.log("New Frontend connection")
})

// так как делаем сервер на основе http , его нужно запустить

const PORT = 3001;

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});