import {Router} from 'express'
import {productRouter} from './produtos'
import {inferir} from './middleware/interferir'
import { routerUser } from './user'

 const router = Router()

 router.use('/produtos',productRouter)
 router.use('/user',routerUser)
 router.use(inferir)

router.get("/ping",(request,response)=>{
    response.json({pong:true})
})

router.get("/",(req,res)=>{
    res.send("hello word")
    
})

export {router}

