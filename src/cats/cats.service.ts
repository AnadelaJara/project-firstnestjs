import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    // {
    //   id: 1,
    //   name: 'Copito',
    //   age: 22,
    //   breed: 'Russian',
    // },
    // {
    //   id: 2,
    //   name: 'Lolito',
    //   age: 15,
    //   breed: 'Blonde',
    // },
  ];

  getCats(): Cat[] {
    return this.cats;
  }

  create(cat: CreateCatDto) {
    /// Añadir id al parámetro cats inventado
    this.cats.push({
      id: this.cats.length + 1,
      ...cat,
    });
  }
}
