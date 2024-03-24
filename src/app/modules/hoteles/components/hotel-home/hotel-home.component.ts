import { Component, EventEmitter, OnInit } from '@angular/core';
import { Autocomplete, searchForm } from '../../interfaces/dto/autocomplete.interface';
import { HotelService } from '../../services/hotel/hotel.service';
import { search } from '../../interfaces/hotel-endpoints-params';
import { hotelRoutes } from '../../enums/hotel-urls.enum';
import { HttpParams } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-hotel-home',
  templateUrl: './hotel-home.component.html',
  styleUrls: ['./hotel-home.component.css']
})
export class HotelHomeComponent implements OnInit {

  place: Autocomplete = {} as Autocomplete;
  llegada: string     = '';
  salida : string     = '';
  hoteles: Array<any> = [];
  searchParams: search = {} as search;
  url: string = '';

  constructor(private hotelService: HotelService, private storage: LocalStorageService) {

  }

  ngOnInit(): void {
    
  }

  getSearch(item: searchForm) {
    console.log("get autocomplete", item)
    this.place   = item.search;
    this.llegada = item.llegada;
    this.salida  = item.salida;

    this.search();
  }
  
  search() {
    if (Object.entries(this.place).length > 0 && this.llegada && this.salida) {
      this.searchParams = {
        entityId: this.place?.entityId,
        checkin:  this.llegada,
        checkout: this.salida,
      }

      this.getHotels();
    }
  }

  getHotels() {
    if (this.searchParams) {
      this.hotelService.search(this.searchParams).subscribe(hoteles => {
        this.hoteles = hoteles.data.results.hotelCards;
        console.log(hoteles)
      });
    }
  }

  getID(id: string) {
    debugger;
    const { baseURL, search  } = hotelRoutes;
    const fromObject = this.hotelService.setParams(this.searchParams);
    const params = new HttpParams({ fromObject });

    const url = `${baseURL}/${search}?${params.toString()}`

    let hoteles = this.storage.getData(url);
    if (hoteles) {
      hoteles.data.results.hotelCards = hoteles.data.results.hotelCards.filter((hotel: any) => hotel.hotelId !== id);
      this.storage.saveData(url, hoteles);
      this.getHotels();
    }
  }
}
