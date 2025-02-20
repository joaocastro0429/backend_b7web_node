import {createServer} from 'node:http'

const server=createServer((req,res)=>{
  return res.end("Ola mundo")
})

server.listen(5555)