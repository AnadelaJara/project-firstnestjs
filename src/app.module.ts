import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [CatsModule],
  controllers: [DogsController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
