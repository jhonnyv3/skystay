import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelHomeComponent } from './components/hotel-home/hotel-home.component';

const routes: Routes = [
  { path: '',  component: HotelHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelesRoutingModule { }
