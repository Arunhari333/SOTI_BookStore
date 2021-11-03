import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    const bearerToken = localStorage.getItem('authToken');
    
    request = request.clone({ 
      setHeaders: {
        Authorization: 'Bearer ' + bearerToken
      }
    });

    console.log(request);
    return next.handle(request);

  }
}
