import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*   {
		path: '',
		loadChildren: () =>
			import('./modules/home/home.module').then(x => x.HomeModule)
	},   */
  {
		path: '',
		loadChildren: () =>
			import('./modules/hoteles/hoteles.module').then(x => x.HotelesModule)
	},
  {
		path: 'hoteles',
		loadChildren: () =>
			import('./modules/hoteles/hoteles.module').then(x => x.HotelesModule)
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
