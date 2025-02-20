import express from 'express'
// hemlmet faz uma seguraça para evitar invasão
import helmet from 'helmet'
import path  from 'path'

const server= express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname,'../public')))


server.listen(3333)