import { Component, EventEmitter, OnInit } from '@angular/core';
import { Autocomplete } from '../../interfaces/dto/autocomplete.interface';
import { HotelService } from '../../services/hotel/hotel.service';
import { search } from '../../interfaces/hotel-endpoints-params';

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
  
  constructor(private hotelService: HotelService) {

  }

  ngOnInit(): void {
    
  }

  getPlace(item: Autocomplete) {
    console.log("get autocomplete", item)
    this.place = item;
    this.search();
  }
  
  getllegada(llegada: string) {
    this.llegada = llegada;
    this.search();
  }
  
  getSalida(salida: string) {
    this.salida = salida;
    this.search();
  }

  search() {
    if (Object.entries(this.place).length > 0 && this.llegada && this.salida) {
      const searchParams: search = {
        entityId: this.place?.entityId,
        checkin:  this.llegada,
        checkout: this.salida
      }

      this.hotelService.search(searchParams).subscribe(hoteles => {
        this.hoteles = hoteles.data.results.hotelCards;
        console.log(hoteles)
      })
    }
  }
}
