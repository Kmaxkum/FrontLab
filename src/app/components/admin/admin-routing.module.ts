import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminCarsComponent } from './components/admin-cars/admin-cars.component';
import { AdminAddCarComponent } from './components/admin-add-car/admin-add-car.component';
import { AdminEditCarComponent } from './components/admin-edit-car/admin-edit-car.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'cars', component: AdminCarsComponent },
      { path: 'add-car', component: AdminAddCarComponent},
      { path: 'edit-car', component: AdminEditCarComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }