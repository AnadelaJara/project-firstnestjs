import { Module } from '@nestjs/common';
import { DogsClient } from './dogs.client';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { GetAllDogs } from './get.all.dogs';

@Module({
  controllers: [DogsController],
  providers: [GetAllDogs, DogsService, DogsClient],
})
export class DogsModule {}
