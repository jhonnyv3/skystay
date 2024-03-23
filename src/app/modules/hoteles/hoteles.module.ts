import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardComponent } from './components/cards/hotel-card/hotel-card.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { HotelesRoutingModule } from './hoteles-routing.module';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { HotelCheckoutComponent } from './components/hotel-checkout/hotel-checkout.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    HotelCardComponent,
    HotelDetailComponent,
    HotelFormComponent,
    HotelCheckoutComponent
  ],
  imports: [
    CommonModule,
    HotelesRoutingModule,
    SharedModule
  ]
})
export class HotelesModule { }
