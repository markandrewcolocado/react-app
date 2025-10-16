import { Module } from '@nestjs/common';
import { ApisModule } from './v1/apis/apis.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './utils/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig]
    }),
    ApisModule,
    TypeOrmModule.forRootAsync({
      useFactory: databaseConfig
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
