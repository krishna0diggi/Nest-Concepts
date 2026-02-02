import { CanActivate, Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

@Injectable()
export class BookGuard implements CanActivate {
    public key: string = "BCKLHFIEUJE"
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const ctx = context.switchToHttp();
        const request  = ctx.getRequest<Request>();

        if (request.header("key") !== this.key) return false
        console.log("Book guard called")
        return request.header("key") === this.key
        // return false
        // return true;
    }
}