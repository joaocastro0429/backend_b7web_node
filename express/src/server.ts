import express from 'express'
// hemlmet faz uma seguraça para evitar invasão
import helmet from 'helmet'
import path  from 'path'
import {router} from './router/index'
import {erroHandler,notFoundResquest} from './router/erroHandler'

const server= express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname,'../public')))

server.use(router)
server.use(notFoundResquest)
server.use(erroHandler)



server.listen(process.env.PORT)