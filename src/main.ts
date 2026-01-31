import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';


// gloabl middlewares (functional based only, not class based)
function globalMiddlewareOne(req:Request, res:Response, next:NextFunction)
{
  console.log("Global first middleware calld")
  next()
}
function globalMiddlewareTwo(req:Request, res:Response, next:NextFunction)
{
  console.log("Global second middleware calld")
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //global middlewares
  app.use(globalMiddlewareOne)
  app.use(globalMiddlewareTwo)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
