// ws: a Node.js WebSocket library  бекэнд
const ws = new require('ws')
// создаем ws.Server, обязательный параметр port: 5000
const wsServer = new ws.Server({port: 5000})

// для отпрвки сообщения многим пользователям. Для каждого сокет создается новый обьект
const socketList = []




// вешаем случателя события, при каждом подключении сработает
// при каждом подключении создается и передается спец обьект socket. socket может отправлять и получать сообщения от фронтенда
wsServer.on('connection', (socket)=>{
// пишум внешний список в socket
    socketList.push(socket)

// через 3 сек отправляем с помощью метода send -  socket.send сообщение на фронт
    setTimeout(()=>{
        socket.send('welcome to web-socket server')
    }, 3000)
    // console.log('New frontend connection')

// отправляем дополнительные сообщения/ item - отдельные сокет каждый
socketList.forEach(item=>{
    // если сокет не равен тому что только что подключился то отправляем соодщение. Всем остальным кроме нового пользователя отправится сообщение "New member connect" что подключился новый при подключении
    if(item !==socket){
        item.send("New member connect")
    }
})

})