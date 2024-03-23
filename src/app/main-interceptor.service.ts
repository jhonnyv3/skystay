import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers: req.headers
        .set('X-RapidAPI-Key', '998430028bmshf9c036145ecae1fp14e093jsn6564da1ad30e')
        .set('X-RapidAPI-Host', 'sky-scanner3.p.rapidapi.com')
    });

    return next.handle(clonedRequest);
  }
}