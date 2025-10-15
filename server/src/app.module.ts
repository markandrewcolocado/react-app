import { Module } from '@nestjs/common';
import { ApisModule } from './v1/apis/apis.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), // to load env variables
    ApisModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
