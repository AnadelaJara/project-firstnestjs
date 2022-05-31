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

export function toOutputDto(dogs: Dog[]): OutputDto[] {
  return;
}
