import { ApiProperty } from '@nestjs/swagger';

export class OutputDto {
  @ApiProperty()
  //message: object,
  breed: [];
  status: string;
}
