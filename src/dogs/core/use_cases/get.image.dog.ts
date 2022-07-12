import { Injectable } from '@nestjs/common';
import { toBreedImagesOutputDto } from '../dto/breed.image.output.dto';
import { BreedImages } from '../entities/breed.images';
import { DogsService } from '../../services/dogs.service';

@Injectable()
export class GetBreedImage {
  constructor(private servicioDePerretes: DogsService) {}
  async call(breed) {
    const breedImages: BreedImages =
      await this.servicioDePerretes.callToImageBreed(breed);

    return toBreedImagesOutputDto(breedImages);
  }
}
