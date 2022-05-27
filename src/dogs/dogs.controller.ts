import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IGetAllDogs } from './dogs.interfaces';
import { DogsService } from './dogs.service';
import { OutputDto } from './output.dto';

@Controller('dogs')
@ApiTags('dogs')
export class DogsController {
  constructor(private servicioDePerretes: DogsService) {}

  @Get()
  async getDogs(): Promise<OutputDto> {
    return this.servicioDePerretes.callToApi();
  }
}
