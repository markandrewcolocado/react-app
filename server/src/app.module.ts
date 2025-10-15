import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApisModule } from './v1/apis/apis.module';
import { ConfigModule } from '@nestjs/config';
import { Api } from './v1/apis/entities/api.entity';
// import databaseConfig from './utils/config/database.config';
import config from './utils/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), // to load env variables
    TypeOrmModule.forRoot(config),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env.MYSQL_HOST || 'localhost',
    //   port: Number(process.env.MYSQL_PORT) || 3306,
    //   username: process.env.MYSQL_USER || 'root',
    //   password: process.env.MYSQL_PASS || '123456',
    //   database: process.env.MYSQL_NAME,
    //   entities: [Api],
    // }),
    ApisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
