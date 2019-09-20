// reports.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { CarsComponent } from './cars.component';

// routes
export const ROUTES: Routes = [
    { path: '', component: CarsComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    declarations: [CarsComponent]
})
export class CarsModule { }