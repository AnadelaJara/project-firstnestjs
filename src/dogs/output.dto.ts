import { ApiProperty } from '@nestjs/swagger';
import { Dog } from './dog';

export class OutputDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  breed: string[];

  @ApiProperty()
  name: string;
}

// export function toOutputDto(dogs: Dog[]): OutputDto[] {
//   const allDogs: OutputDto[] = dogs.map(function (dog) {
//     const oneDog: OutputDto = {
//       id: dogs.indexOf(dog),
//       breed: dog.breed,
//       name: dog.name,
//     };
//     return oneDog;
//   });

export function toOutputDto(dogs: Dog[]): OutputDto[] {
  const allDogs: OutputDto[] = dogs.map(function (dog, index) {
    const oneDog: OutputDto = {
      id: index,
      breed: dog.breed,
      name: dog.name,
    };
    return oneDog;
  });

  return allDogs;
}
