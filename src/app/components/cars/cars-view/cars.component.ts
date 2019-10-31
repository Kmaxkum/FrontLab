import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.module';
import { AdminDropboxService } from '../../admin/services/admin-load.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less'],
  providers: [CarService, AdminDropboxService]
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor(
    private carService: CarService,
    private adminService: AdminDropboxService,
    ) { }

  ngOnInit() {
    this.carService.getData().subscribe(data => this.cars=data);
  }
}
