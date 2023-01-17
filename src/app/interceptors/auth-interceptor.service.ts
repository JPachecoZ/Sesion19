import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = sessionStorage.getItem("Token")
    if (token){
      const authReq = req.clone({
       headers: req.headers.set(
         'Authorization', `Token token=${token}`
       )
       })
     return next.handle(authReq)
     }
    return next.handle(req)
  }
}
