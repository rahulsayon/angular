import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        console.log("in interceptors")
        var req1 = req.clone({
            setHeaders : {
                'Authorization' : 'abcdefgh'
            }
        })
    return next.handle(req);


  }
}
