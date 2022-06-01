import { Injectable } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { OutputDto, toOutputDto } from './output.dto';

@Injectable()
export class GetAllDogs {
  constructor(private servicioDePerretes: DogsService) {}
  async call(): Promise<OutputDto[]> {
    const dogs = await this.servicioDePerretes.callToApi();
    return toOutputDto(dogs);
  }
}
