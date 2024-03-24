import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  @Input() hoteles: any;

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
