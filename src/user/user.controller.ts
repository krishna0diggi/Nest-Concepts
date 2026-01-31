import { Controller, Get, Post } from "@nestjs/common";

@Controller("users")
export class UserController {

    @Get()
    findAllUsers(): string {
        return "This action returns all users";
    }

    @Post()
    createUser(): string {
        return "This action creates a new user";
    }
}