import { UserService } from './user/user.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AuthIntercaptor implements HttpInterceptor{

    constructor(private userService:UserService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq=req;
        let token = this.userService.getToken()

        if(token!=null){
            newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
        }

        return next.handle(newReq)
    }

}