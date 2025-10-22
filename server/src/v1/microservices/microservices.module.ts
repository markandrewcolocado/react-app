import { Module } from '@nestjs/common';
import { MicroservicesService } from './microservices.service';
import { MicroservicesController } from './microservices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apistatus } from './entities/apistatus.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Apistatus])],
  controllers: [MicroservicesController],
  providers: [MicroservicesService],
})
export class MicroservicesModule {}
