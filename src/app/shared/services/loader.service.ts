import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Loader } from './../interfaces/loader.interface';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<Loader>();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  showOrHide(show: boolean = false) {
    setTimeout(() => {
      this.loaderSubject.next(<Loader>{ show });
    });
  }
}
