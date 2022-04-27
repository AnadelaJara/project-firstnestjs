import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('russian')
  findAll(): string {
    return 'This action returns all russian cats';
  }
  @Get('blonde')
  findAll2(): string {
    return 'This action returns all blonde cats';
  }
}
