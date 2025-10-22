import { Injectable } from '@nestjs/common';
import { CreateBillerDto } from './dto/create-biller.dto';
import { UpdateBillerDto } from './dto/update-biller.dto';

@Injectable()
export class BillersService {
  create(createBillerDto: CreateBillerDto) {
    return 'This action adds a new biller';
  }

  findAll() {
    return `This action returns all billers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biller`;
  }

  update(id: number, updateBillerDto: UpdateBillerDto) {
    return `This action updates a #${id} biller`;
  }

  remove(id: number) {
    return `This action removes a #${id} biller`;
  }
}
