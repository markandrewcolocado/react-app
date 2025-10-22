import { Module } from '@nestjs/common';
import { BillersService } from './billers.service';
import { BillersController } from './billers.controller';

@Module({
  controllers: [BillersController],
  providers: [BillersService],
})
export class BillersModule {}
