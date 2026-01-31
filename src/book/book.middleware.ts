import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware{
    use(req:Request, res:Response,next:NextFunction)
    {
        console.log("Book middleware called")
        let date=new Date()
        console.log("Request date and time:",date.toISOString())
        let method=req.method
        console.log("Request method:",method)
        let url=req.originalUrl
        console.log("Request URL:",url)
        let userAgent=req.get("user-agent") || "unknown"
        console.log("User-Agent:",userAgent)
        let host = req.get('host')
        console.log("Host:",host)

        next()
    }
}