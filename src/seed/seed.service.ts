import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';

export class SeedService {
  populateDB() {
    return CARS_SEED;
  }
}
