import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  public filterHotel(hotel: any) {
    let Keys = Object.keys(localStorage);
    if (Keys.length) {
      let filterKeys = Keys
      .filter(url => url.includes(`https://sky-scanner3.p.rapidapi.com/hotels/search?entityId`));

      console.log(filterKeys)
      if (filterKeys.length) {
        filterKeys.map(url => {
          return this.getData(url).map((data: any) => {
            debugger;
            console.log("data hotel", data)
          });
        });
      }
    }
  }
}
