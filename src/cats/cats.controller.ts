import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ForbiddenException,
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

  /// Protocolos HTTPS:

  //Para tener todos los gatos
  @Get()
  getAll() {
    return this.servicioDeGatetes.getCats();
  }

  //Exceptions
  @Get('forbidden')
  async findAll() {
    throw new ForbiddenException();
  }

  //Para añadir un nuevo gato
  @Post()
  create(@Body() newCat: CreateCatDto): void {
    return this.servicioDeGatetes.create(newCat);
  }

  //Para actualizar un gato ya existente
  @Put(':id')
  update(@Param('id') id: string, @Body() updateACat: UpdateCatDto) {
    return this.servicioDeGatetes.update(parseInt(id), updateACat);
  }

  //Para borrar un gato existente
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicioDeGatetes.remove(parseInt(id));
  }
}
