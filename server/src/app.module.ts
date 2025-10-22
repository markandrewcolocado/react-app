import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApisModule } from './v1/apis/apis.module';
import { MicroservicesModule } from './v1/microservices/microservices.module';
import { AtmsModule } from './v1/atms/atms.module';
import { BillersModule } from './v1/billers/billers.module';
import databaseConfig from './utils/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig]
    }),
    // TypeOrmModule.forRootAsync({
    //   useFactory: databaseConfig
    // }),
    // ApisModule,
    MicroservicesModule,
    AtmsModule,
    BillersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
