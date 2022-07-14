import { Module } from '@nestjs/common';
import { DogsClient } from './services/dogs_services/dogs.client';
import { DogsController } from './controllers/dogs.controller';
import { DogsService } from './services/dogs_services/dogs.service';
import { GetAllDogs } from './core/use_cases/get.all.dogs';
import { GetBreedImage } from './core/use_cases/get.image.dog';
import { ConfigServiceController } from './controllers/config.controller';

@Module({
  controllers: [DogsController, ConfigServiceController],
  providers: [GetAllDogs, DogsService, DogsClient, GetBreedImage],
})
export class DogsModule {}
