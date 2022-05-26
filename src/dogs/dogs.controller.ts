import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { callToApi, DogsService } from './dogs.service';
import { Dog, OutputDto } from './output.dto';

@Controller('dogs')
@ApiTags('dogs')
export class DogsController {
  constructor(private servicioDePerretes: DogsService) {}

  @Get()
  callToApi() {
    return callToApi();
  }
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Dog,
  })
  async create(@Body() bodyPerrete: OutputDto): Promise<void> {
    return this.servicioDePerretes.create(bodyPerrete);
  }
}
