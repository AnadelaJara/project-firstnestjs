import { Controller, Get, Req, Post, Header, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  // @Post()
  // @Header('Cache-Control', 'none')
  // create(): string {
  //   return 'This action adds a new cat';
  // }

  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats';
  // }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
