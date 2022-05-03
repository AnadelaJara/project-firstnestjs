import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      name: 'Copito',
      age: 22,
      breed: 'Russian',
    },
    {
      name: 'Lolito',
      age: 15,
      breed: 'Blonde',
    },
  ];

  getCats(): Cat[] {
    return this.cats;
  }

  // create(cat: Cat) {
  //   this.cats.push(cat);
  // }

  // findAll(): Cat[] {
  //   return this.cats;
  // }
}
// function getCats(): Cat {
//   throw new Error('Function not implemented.');
// }
