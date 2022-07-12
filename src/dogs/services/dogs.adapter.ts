import { Dog } from '../core/entities/dog';
import { BreedImages } from '../core/entities/breed.images';
import { IGetAllDogs } from '../core/interfaces/dogs.interfaces';

export function fromDogsResponseToEntity(dogResponse: IGetAllDogs): Dog[] {
  const keys = Object.keys(dogResponse.message);
  const listOfDogs: Dog[] = [];
  for (let i = 0; i < keys.length; i++) {
    const eachDog = keys[i];
    const dog: Dog = {
      breed: dogResponse.message[eachDog],
      name: eachDog,
    };
    listOfDogs.push(dog);
  }
  return listOfDogs;
}

export function fromBreedsImageResponseToEntity(
  breedImageResponse,
  breed: string,
): BreedImages {
  const breedImage: BreedImages = {
    breed: breed,
    images: breedImageResponse.message,
  };
  return breedImage;
}
