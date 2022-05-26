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
  UseGuards,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { Cat, CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';
import { RolesGuard } from 'src/roles.guard';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private servicioDeGatetes: CatsService) {}
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Cat,
  })
  async create(@Body() nuevoBody: CreateCatDto): Promise<void> {
    return this.servicioDeGatetes.create(nuevoBody);
  }

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
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.servicioDeGatetes.findOne();
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

  @Post('superuser')
  @UseGuards(RolesGuard)
  async create2(@Body() createCatDtoForAdmin: CreateCatDto) {
    this.servicioDeGatetes.create(createCatDtoForAdmin);
  }

  // Para añadir un nuevo gato
  //   @Post()
  //   create(@Body() newCat: CreateCatDto): void {
  //     return this.servicioDeGatetes.create(newCat);
  //   }
  // }
}
