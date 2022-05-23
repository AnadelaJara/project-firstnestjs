import { Controller } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private servicioDePerretes: DogsService) {}

  @Get()
  getallBreeds() {
    return this.getallBreeds.call();
  }
}
