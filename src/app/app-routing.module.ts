import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CarsComponent } from './components/cars/cars.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: "home", component: LandingComponent },
  { path: "cars", component: CarsComponent },
  { path: "admin", component: AdminComponent },
  { path: "404", component: PagenotfoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
