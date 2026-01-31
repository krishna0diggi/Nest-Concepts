import { Controller, Get, Post } from "@nestjs/common";

@Controller("book")
export class BookController{
    @Get()
    findAllBooks():string{
        return "This action returns all books"
    }   
    @Post()
    createBook():string{
        return "This action creates a new book"
    }
}
