import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  @Input() hoteles: any;
  @Output() id = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {
    
  }

  getID(id: string) {
    this.id.emit(id);
  }
}
