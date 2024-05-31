import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Focus',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    return car;
  }
}