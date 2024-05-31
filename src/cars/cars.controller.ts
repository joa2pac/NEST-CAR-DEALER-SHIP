/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return ['Honda', 'Toyota', 'Mercedes'];
  }
}
