import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ForbiddenException,
  UseFilters,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';

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

  //Exceptionsfilters
  @Get('error')
  @UseFilters(new HttpExceptionFilter())
  async findAll() {
    throw new ForbiddenException();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.servicioDeGatetes.findOne();
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
