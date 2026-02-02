import { Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { BookGuard } from "./book.guard";

@Controller("book")
export class BookController{
    @Get()
    @UseGuards(new BookGuard())
    findAllBooks():string{
        return "This action returns all books"
    } 
    
    @Get("/:id")
    findBookById(@Param("id", ParseIntPipe) id: number):string{
        console.log(id, typeof(id))
        return `This action returns a book by id: ${id}`
    }
    @Post()
    createBook():string{
        return "This action creates a new book"
    }
}
