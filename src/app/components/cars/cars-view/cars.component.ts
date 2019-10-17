import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.module';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less'],
  providers: [CarService]
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getData().subscribe(data => this.cars=data);
  }

}
