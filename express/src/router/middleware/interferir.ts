import { RequestHandler } from "express";

export const inferir:RequestHandler=(request,response,next)=>{
    let logged=true
    if(logged){
        next()
    }
    else {
         response.status(403).json({ error: 'Middleware não permitiu' })
}
}