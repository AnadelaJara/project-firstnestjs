import { Module } from '@nestjs/common';
import { DogsClient } from './dogs.client';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Module({
  controllers: [DogsController],
  providers: [DogsService, DogsClient],
})
export class DogsModule {}
