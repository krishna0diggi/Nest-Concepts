import { CanActivate, Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class BookGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log("Book guard called")
        // return false
        return true;
    }
}