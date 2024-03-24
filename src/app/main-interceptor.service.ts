import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './shared/services/loader.service';

@Injectable()
export class MainInterceptorService implements HttpInterceptor {

  constructor(private loader: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers: req.headers
        .set('X-RapidAPI-Key', '998430028bmshf9c036145ecae1fp14e093jsn6564da1ad30e')
        .set('X-RapidAPI-Host', 'sky-scanner3.p.rapidapi.com')
    });

    this.loader.showOrHide(true);
    //return next.handle(clonedRequest);
    return next.handle(clonedRequest).pipe(
      finalize(() => {
        this.loader.showOrHide(false);
      })
  );    
  }
}
