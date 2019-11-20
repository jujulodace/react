var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

server.listen(3001);

app.get('/', function (req,res){
    res.sendFile(__dirname+'/index.html');
})
var n =0;
io.on('connection', (socket) => {
    socket.on("update",() => {
        io.emit("update")
        console.log("update")
    });
    socket.on("case",(click,j) => {
        io.emit("case",click,j);
        console.log("oui"+click +" "+j);
    })
    socket.on("msg",(msg) => {
        io.emit("msg",msg);
        console.log("msg"+msg);
    })
    socket.on("new",()=>{
            console.log("new joueurP4")
            n++;
            socket.emit('new',n)
    })
});


