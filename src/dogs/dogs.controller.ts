import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetAllDogs } from './get.all.dogs';
import { OutputDto } from './output.dto';

@Controller('dogs')
@ApiTags('dogs')
export class DogsController {
  constructor(private useCase: GetAllDogs) {}

  @Get()
  async getDogs(): Promise<OutputDto[]> {
    return this.useCase.call();
  }
}
