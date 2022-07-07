import { ApiProperty } from '@nestjs/swagger';
import { BreedImages } from './breed.images';

export class BreedImagesOutputDto {
  @ApiProperty()
  raza: string;

  @ApiProperty()
  imagenes: string[];

  @ApiProperty()
  imagesAmount: number;
}
export function toBreedImagesOutputDto(
  breedImages: BreedImages,
): BreedImagesOutputDto {
  const breedImagesOutputDto: BreedImagesOutputDto = {
    raza: breedImages.breed,
    imagenes: breedImages.images,
    imagesAmount: breedImages.images.length,
  };
  return breedImagesOutputDto;
}
