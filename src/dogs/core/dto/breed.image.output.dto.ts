import { ApiProperty } from '@nestjs/swagger';
import { BreedImages } from '../entities/breed.images';

export class BreedImagesOutputDto {
  @ApiProperty()
  raza: string;

  @ApiProperty()
  //imagenes: string[];
  imagenRandom: string;

  //@ApiProperty()
  //imagesAmount: number;
}
export function toBreedImagesOutputDto(
  breedImages: BreedImages,
): BreedImagesOutputDto {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(0, 100);
  console.log(rndInt);
  const breedImagesOutputDto: BreedImagesOutputDto = {
    raza: breedImages.breed,
    imagenRandom: breedImages.images[rndInt],
    //imagenes: breedImages.images,
    //imagesAmount: breedImages.images.length,
  };
  return breedImagesOutputDto;
}
