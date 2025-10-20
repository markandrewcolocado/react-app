import { Module } from '@nestjs/common';
import { AtmsService } from './atms.service';
import { AtmsController } from './atms.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AtmsController],
  providers: [AtmsService],
})
export class AtmsModule {}
