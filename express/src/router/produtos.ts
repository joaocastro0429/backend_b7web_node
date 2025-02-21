import {Router} from 'express'

const productRouter = Router()

productRouter.get("/",(req,res)=>{
    res.send({produtos:[]})
})

productRouter.get("/:id",(req,res)=>{
    console.log(req.params)
    res.json({name:"mouse",price:90})
    
})   


export {productRouter}