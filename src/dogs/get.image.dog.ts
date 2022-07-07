import { Injectable } from '@nestjs/common';
import { toBreedImagesOutputDto } from './breed.image.output.dto';
import { DogsService } from './dogs.service';

@Injectable()
export class GetBreedImage {
  constructor(private servicioDePerretes: DogsService) {}
  async call(breed) {
    const breedImages = await this.servicioDePerretes.callToImageBreed(breed);

    return toBreedImagesOutputDto(breedImages);
  }
}
