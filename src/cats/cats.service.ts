import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  getCats(): string {
    return 'Estos son los gatetes';
  }
  // private readonly cats: Cat[] = [];

  // create(cat: Cat) {
  //   this.cats.push(cat);
  // }

  // findAll(): Cat[] {
  //   return this.cats;
  // }
}
