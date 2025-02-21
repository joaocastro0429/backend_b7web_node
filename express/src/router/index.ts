import {Router} from 'express'
import {productRouter} from './produtos'

 const router = Router()

 router.use('/produtos',productRouter)

router.get("/ping",(request,response)=>{
    response.json({pong:true})
})

router.get("/",(req,res)=>{
    res.send("hello word")
    
})

export {router}

