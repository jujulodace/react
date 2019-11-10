var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

server.listen(3001);

app.get('/', function (req,res){
    res.sendFile(__dirname+'/index.html');
})

io.on('connection', (socket) => {
    socket.on("update",() => {
        io.emit("update")
        console.log("update")
    });
    socket.on("case",(click) => {
        io.emit("case",click);
        console.log("oui"+click);
    })
});


