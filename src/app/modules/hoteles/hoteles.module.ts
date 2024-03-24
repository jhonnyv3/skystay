import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardComponent } from './components/cards/hotel-card/hotel-card.component';

import { HotelesRoutingModule } from './hoteles-routing.module';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { HotelCheckoutComponent } from './components/hotel-checkout/hotel-checkout.component';
import { HotelHomeComponent } from './components/hotel-home/hotel-home.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';


@NgModule({
  declarations: [
    HotelListComponent,
    HotelCardComponent,
    HotelDetailComponent,
    HotelFormComponent,
    HotelCheckoutComponent,
    HotelHomeComponent,
    SearchboxComponent,
  ],
  imports: [
    CommonModule,
    HotelesRoutingModule,
    SharedModule
  ]
})
export class HotelesModule { }
