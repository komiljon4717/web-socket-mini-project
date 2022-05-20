import express from 'express'
import { createServer } from "http"
import { Server } from "socket.io"

const PORT = process.env.PORT || 5000
const app = express()

const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        credentials: true
    }
})


io.on("connection", (socket) => {
    console.log('Kimdir ulandi!')

    socket.on("new message", ({ username, value }) => {
        socket.broadcast.emit("message", { username, value })
    })

    socket.on('disconnect', () => {
        console.log('Osha odam chiqib ketdi!')
    })
})

httpServer.listen(PORT, () => console.log('backend server ready at *' + PORT))