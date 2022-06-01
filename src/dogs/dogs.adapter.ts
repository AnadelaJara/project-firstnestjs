import { Dog } from './dog';
import { IGetAllDogs } from './dogs.interfaces';

export function fromDogsResponseToEntity(apiAwait: IGetAllDogs): Dog[] {
  const keys = Object.keys(apiAwait.message);
  const listOfDogs: Dog[] = [];
  for (let i = 0; i < keys.length; i++) {
    const eachDog = keys[i];
    const dog: Dog = {
      breed: apiAwait.message[eachDog],
      name: eachDog,
    };
    listOfDogs.push(dog);
  }
  return listOfDogs;
}
