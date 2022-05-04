import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { ListAllEntries } from './list-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

import { Response } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  // catsService: CatsService;
  // constructor(catsService) {
  //   this.catsService = catsService;
  // }
  constructor(private servicioDeGatetes: CatsService) {}

  @Get()
  getAll() {
    return this.servicioDeGatetes.getCats();
  }

  @Post()
  create(@Body() newCat: CreateCatDto): void {
    return this.servicioDeGatetes.create(newCat);
  }
}
