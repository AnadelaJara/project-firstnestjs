import { ApiProperty } from '@nestjs/swagger';

export class OutputDto {
  @ApiProperty()
  //message: object,
  breed: [];
  status: string;
}

export class Dog {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
