import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: any;
  @Output() onDelete = new EventEmitter<string>();
  constructor(private storage: LocalStorageService) {

  }

  ngOnInit(): void {
    console.log(this.hotel)
  }

  delete(hotelId: string) {
    this.onDelete.emit(hotelId);
  }
}
