import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './update-cat.dto';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    {
      id: 1,
      name: 'Loli',
      age: 7,
      breed: 'blanco',
    },
    {
      id: 2,
      name: 'Pepi',
      age: 7,
      breed: 'blanco',
    },
  ];

  getCats(): Cat[] {
    return this.cats;
  }

  //Exception filters
  findAll(): Cat[] {
    return this.cats;
  }

  create(cat: CreateCatDto) {
    /// Añadir id al parámetro cats inventado
    this.cats.push({
      id: this.cats.length + 1,
      ...cat,
    });
  }

  update(id: number, body: UpdateCatDto) {
    const catUpdated = this.cats.find((cat) => cat.id == id);
    catUpdated.id = body.id;
    catUpdated.name = body.name;
    catUpdated.age = body.age;
    catUpdated.breed = body.breed;
  }

  remove(id: number) {
    const catDeleted = this.cats.filter((cat) => cat.id !== id);
    this.cats = catDeleted;
  }
  create2(catForAdmin: CreateCatDto) {
    /// Añadir id al parámetro cats inventado
    this.cats.push({
      id: this.cats.length + 1,
      ...catForAdmin,
    });
  }
}
