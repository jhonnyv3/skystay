import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment.development';
import { hotelRoutes } from '../../enums/hotel-urls.enum';
import { HotelAutoComplete, search } from '../../interfaces/hotel-endpoints';


@Injectable({
  providedIn: 'root'
})
export class HotelService extends UtilService {

  constructor(private httpClient: HttpClient, private storage: LocalStorageService) {
    super();
  }

  autocomplete(param: HotelAutoComplete) {
    const { baseURL, autoComplete  } = hotelRoutes;
    const fromObject = this.setParams(param);
    const params = new HttpParams({ fromObject });

    const url = `${baseURL}/hotels/${autoComplete}?${params.toString()}`
    const cachedResponse = this.storage.getData(url);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return this.httpClient.get(url).pipe(
      tap((response) => {
        this.storage.saveData(url, response);
      })
    );    
  }

  search(param: search) {
    const { baseURL, search  } = hotelRoutes;
    const fromObject = this.setParams(param);
    const params = new HttpParams({ fromObject });

    const url = `${baseURL}/hotels/${search}?${params.toString()}`
    const cachedResponse = this.storage.getData(url);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return this.httpClient.get(url).pipe(
      tap((response) => {
        this.storage.saveData(url, response);
      })
    );    
  }  
}
