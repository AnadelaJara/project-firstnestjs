import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetAllDogs } from '../core/use_cases/get.all.dogs';
import { GetBreedImage } from '../core/use_cases/get.image.dog';
import { OutputDto } from '../core/dto/output.dto';

@Controller('dogs')
@ApiTags('dogs')
export class DogsController {
  constructor(
    private useCase: GetAllDogs,
    private getBreedImageUseCase: GetBreedImage,
  ) {}

  @Get()
  async getDogs(): Promise<OutputDto[]> {
    console.log();

    return this.useCase.call();
  }

  @Get('image')
  async getBreedImage(@Query('breed') breed: string) {
    const response = this.getBreedImageUseCase.call(breed);
    return response;
  }
}
