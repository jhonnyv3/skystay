import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment.development';
import { hotelRoutes } from '../../enums/hotel-urls.enum';
import { HotelAutoComplete, detail, nearbyMap, prices, reviews, search, similarHotels } from '../../interfaces/hotel-endpoints-params';
import { mock } from './mock';


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

    const url = `${baseURL}/${autoComplete}?${params.toString()}`;
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

    const url = `${baseURL}/${search}?${params.toString()}`
    const cachedResponse = this.storage.getData(url);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return this.httpClient.get(url).pipe(
      tap((response) => {
        this.storage.saveData(url, response);
      }),
      map((response: any) => {
        debugger;
        if (response && response?.data?.results?.searchSummary?.total) {
          return response;
        }
        return mock;
      })
    );    
  } 

  detail(param: detail) {
    const { baseURL, detail  } = hotelRoutes;
    const fromObject = this.setParams(param);
    const params = new HttpParams({ fromObject });

    const url = `${baseURL}/${detail}?${params.toString()}`
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

  prices(param: prices) {
    const { baseURL, prices  } = hotelRoutes;
    const fromObject = this.setParams(param);
    const params = new HttpParams({ fromObject });

    const url = `${baseURL}/${prices}?${params.toString()}`
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

  reviews(param: reviews) {
    const { baseURL, reviews  } = hotelRoutes;
    const fromObject = this.setParams(param);
    const params = new HttpParams({ fromObject });

    const url = `${baseURL}/${reviews}?${params.toString()}`
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

  similar_hotels(param: similarHotels) {
    const { baseURL, similarHotels  } = hotelRoutes;
    const fromObject = this.setParams(param);
    const params = new HttpParams({ fromObject });

    const url = `${baseURL}/${similarHotels}?${params.toString()}`
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

  nearby_map(param: nearbyMap) {
    const { baseURL, nearbyMap  } = hotelRoutes;
    const fromObject = this.setParams(param);
    const params = new HttpParams({ fromObject });

    const url = `${baseURL}/${nearbyMap}?${params.toString()}`
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
