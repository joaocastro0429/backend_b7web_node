import { ErrorRequestHandler, RequestHandler } from "express";
export const notFoundResquest:RequestHandler=(request,response)=>{
    response.status(404).json({error:'route not found'})

}
export const erroHandler:ErrorRequestHandler=(err,request,response,next)=>{
    response.status(500).json({error:'Ocorreu um Error'})

}