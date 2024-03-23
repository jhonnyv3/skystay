import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueloCardComponent } from './components/cards/vuelo-card/vuelo-card.component';
import { VueloCheckoutComponent } from './components/vuelo-checkout/vuelo-checkout.component';
import { VuelosRoutingModule } from './vuelos-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { VueloFormComponent } from './components/vuelo-form/vuelo-form.component';
import { VueloDetailComponent } from './components/vuelo-detail/vuelo-detail.component';


@NgModule({
  declarations: [
    VueloCardComponent,
    VueloCheckoutComponent,
    VueloFormComponent,
    VueloDetailComponent
  ],
  imports: [
    CommonModule,
    VuelosRoutingModule,
    SharedModule
  ]
})
export class VuelosModule { }
