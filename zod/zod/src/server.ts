import express from 'express'
import  routes from './request'
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(routes)



server.get("/", (req, res) => {
    return res.json({ pong: true })
})

server.listen(3333, () => {
    console.log("running")
})
