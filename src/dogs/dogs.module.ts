import { Module } from '@nestjs/common';
import { DogsClient } from './services/dogs.client';
import { DogsController } from './controllers/dogs.controller';
import { DogsService } from './services/dogs.service';
import { GetAllDogs } from './core/use_cases/get.all.dogs';
import { GetBreedImage } from './core/use_cases/get.image.dog';

@Module({
  controllers: [DogsController],
  providers: [GetAllDogs, DogsService, DogsClient, GetBreedImage],
})
export class DogsModule {}
