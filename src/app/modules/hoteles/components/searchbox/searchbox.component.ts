import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HotelService } from '../../services/hotel/hotel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelAutoComplete } from '../../interfaces/hotel-endpoints-params';
import { Autocomplete, searchForm } from '../../interfaces/dto/autocomplete.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit{

  @Output() onSearch           = new EventEmitter<searchForm>();
  options: Array<Autocomplete> = [];
  searchForm: FormGroup = this.fb.group({
    search : [{ value: '', disabled: false }, Validators.required],
    llegada: [{ value: '', disabled: false }, Validators.required],
    salida : [{ value: '', disabled: false }, Validators.required],
  });

  searchParam: Autocomplete = {} as Autocomplete;
  llegadaParam = '';
  salidaParam  = '';

  showOptions = false;
  minArrival  = new Date(moment().add(5, 'd').toString());
  minDepart   = new Date(moment().add(6, 'd').toString());

  constructor(private hotelService: HotelService, public fb: FormBuilder) {

  }

  ngOnInit(): void {
    
  }

  onchangeAutocomplete() {
    if (!this.searchForm.controls['search'].value) {
      this.options = [];
      return;
    }
    this.onautocomplete();
  }

  onautocomplete() {
    if (this.searchForm.controls['search'].value && this.searchForm.controls['search'].value?.length > 3) {
      const params: HotelAutoComplete = {
        query: this.searchForm.controls['search'].value
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
    this.searchParam = item;
  }

  onChangeLlegada() {
    if (this.searchForm.controls['llegada'].value) {
      const llegadaFormatted = moment(this.searchForm.controls['llegada'].value).format('YYYY-MM-DD');
      this.llegadaParam = llegadaFormatted;
    }
  }

  onChangeSalida() {
    if (this.searchForm.controls['salida'].value) {
      const salidaFormatted = moment(this.searchForm.controls['salida'].value).format('YYYY-MM-DD');
      this.salidaParam = salidaFormatted;
    }
  }

  sendForm() {
    if (this.searchForm.valid) {
      this.onSearch.emit({
        search: this.searchParam,
        llegada: this.llegadaParam,
        salida: this.salidaParam
      })
    }
  }
}
