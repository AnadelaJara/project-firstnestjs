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

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   this.catsService.create(createCatDto);
  // }

  // @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }

  @Get()
  getAll() {
    return this.servicioDeGatetes.getCats();
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);

    //return 'This action adds a new cat';
    return;
  }
}
