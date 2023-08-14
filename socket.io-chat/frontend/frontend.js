import io from "socket.io-client"
// подключаемся к ws server с фронтенда/
const socket = io.connect("http://localhost:3001")