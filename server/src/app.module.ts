import { Module } from '@nestjs/common';
import { PortalModule } from './v1/portal/portal.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: process.env.API_DASHBOARD_MYSQL_USER,
    //   password: process.env.API_DASHBOARD_MYSQL_PASS,
    //   entities: []
    // }),
    PortalModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
