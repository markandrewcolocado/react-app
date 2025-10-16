import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApisModule } from './v1/apis/apis.module';
import { MicroservicesModule } from './v1/microservices/microservices.module';
import databaseConfig from './utils/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: databaseConfig
    }),
    ApisModule,
    MicroservicesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
