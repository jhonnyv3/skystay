import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HotelService } from '../../services/hotel/hotel.service';
import { FormControl } from '@angular/forms';
import { HotelAutoComplete } from '../../interfaces/hotel-endpoints-params';
import { Autocomplete } from '../../interfaces/dto/autocomplete.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit{

  @Output() onSearch           = new EventEmitter<Autocomplete>();
  @Output() OnArrival          = new EventEmitter<string>();
  @Output() onDeparture        = new EventEmitter<string>();
  options: Array<Autocomplete> = [];
  llegada     = new FormControl('');
  salida      = new FormControl('');
  search      = new FormControl('');
  showOptions = false;
  minArrival  = new Date(moment().add(5, 'd').toString());
  minDepart   = new Date(moment().add(6, 'd').toString());

  constructor(private hotelService: HotelService) {

  }

  ngOnInit(): void {
    
  }

  onchangeAutocomplete() {
    if (!this.search.value) {
      this.options = [];
      return;
    }
    this.onautocomplete();
  }

  onautocomplete() {
    if (this.search.value && this.search.value?.length > 3) {
      const params: HotelAutoComplete = {
        query: this.search.value
      };

      this.hotelService.autocomplete(params).subscribe(result => {
        console.log(result.data);
        if (result.data && result.data.length > 0) {
          this.showOptions = true;
          this.options = result.data;
        }
      })
    }
  }

  selectItem(item: Autocomplete) {
    this.showOptions = false;
    this.onSearch.emit(item);
  }

  onChangeLlegada() {
    if (this.llegada.value) {
      const llegadaFormatted = moment(this.llegada.value).format('YYYY-MM-DD');
      this.OnArrival.emit(llegadaFormatted);
    }
  }

  onChangeSalida() {
    if (this.salida.value) {
      const salidaFormatted = moment(this.salida.value).format('YYYY-MM-DD');
      this.onDeparture.emit(salidaFormatted);
    }
  }
}
