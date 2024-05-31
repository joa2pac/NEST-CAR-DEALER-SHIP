/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Honda', 'Toyota', 'Mercedes'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    console.log({ id });
    return this.cars[id];
  }
}
