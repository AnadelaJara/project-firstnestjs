import { ApiProperty } from '@nestjs/swagger';

export class InputDto {
  @ApiProperty()
  //message: object,
  breed: string[];
}
