import { Injectable } from '@nestjs/common';
import { DogsService } from '../../services/dogs_services/dogs.service';
import { OutputDto, toOutputDto } from '../dto/output.dto';

@Injectable()
export class GetAllDogs {
  constructor(private servicioDePerretes: DogsService) {}
  async call(): Promise<OutputDto[]> {
    const dogs = await this.servicioDePerretes.callToApi();
    return toOutputDto(dogs);
  }
}
