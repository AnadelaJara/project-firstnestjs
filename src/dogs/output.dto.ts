import { ApiProperty } from '@nestjs/swagger';

export class OutputDto {
  @ApiProperty()
  message: MessageOutputDto;
}

class MessageOutputDto {
  affenpinscher: any[];
  african: any[];
  airedale: any[];
  akita: any[];
  appenzeller: any[];
  australian: string[];
  basenji: any[];
  beagle: any[];
}
