import { Controller, Get } from '@nestjs/common';
import { callToApi, DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private servicioDePerretes: DogsService) {}

  @Get()
  callToApi() {
    return callToApi();
  }
}
