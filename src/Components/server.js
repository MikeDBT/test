

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/MintingTool.js');
});

let count = 0;

io.on('connection', (socket) => 
{
 
  socket.on('chat message', (msg) => 
  {
      
    io.emit('chat message', msg);
    socket.emit('chat message', msg);
    
    if(msg == 1)
    {
      count ++;
      io.emit('chat message', count);
      socket.emit('chat message', count);
      console.log(count);
    }

  });

});


server.listen(1234, () => {
  console.log('listening on *:3000');
});