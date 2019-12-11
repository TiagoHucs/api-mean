import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private router: Router) { 
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        let authRequest : any;
        let token = localStorage.getItem('token');
        console.log(req.url)
        if(token){
            authRequest = req.clone({
                setHeaders: {
                    'authorization' : token
                }
            });

            return next.handle(authRequest)
                .pipe(tap(
                    (response: HttpEvent<any>) => {
                        //resposta sem erro                     
                    },
                    (error: HttpErrorResponse) => {
                        console.log(error.message,error.status.toString());
                        if(error.status == 401){
                            // se for erro de autenticação envia para o login
                            this.router.navigate(['login']);
                        }
                    },
                    () => {
                    //console.log("completed successfully"); // this runs when you don't get error
                                                            // same as "complete?" parameter of .subscribe
                    }
                ));

        } else {
            return next.handle(req);
        }
        
    }

}