import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CatsModule,
    DogsModule,
    //TypeOrmModule.forRoot({
    //type: 'mysql',
    //host: 'localhost',
    //port: 3306,
    //username: 'root',
    //password: 'root',
    //database: 'testa',
    //entities: [],
    //synchronize: true,
    //}),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
