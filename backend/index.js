const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const port = process.env.PORT || 4000

const app = express()
const server = http.createServer(app)
const io = socketIo(server);

io.on("connection", socket =>{
    console.log("Connected")
    socket.emit('msg',"You are connected")
    socket.on('click', ()=>{
        socket.emit('msg',"You clicked the image")
    })
})

server.listen(port, ()=> console.log(`Listening on port ${port}`))
