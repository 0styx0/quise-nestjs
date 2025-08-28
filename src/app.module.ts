import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      // todo hide credentials
      url: 'mongodb://db_admin:db_password@localhost:27017/ecommerce?authSource=admin',
      database: 'ecommerce',
      synchronize: true, // todo change
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
