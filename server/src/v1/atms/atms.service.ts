import { Injectable } from '@nestjs/common';
import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AtmsService {
  constructor(private readonly api: HttpService) {}

  create(createAtmDto: CreateAtmDto) {
    return 'This action adds a new atm';
  }

  async findAll() {
    const response = this.api.get('http://172.18.2.24:8088/uat/v1/atms');
    const test = await firstValueFrom(response);
    console.log(test.data)
    return test;
    // return `This action returns all atms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} atm`;
  }

  update(id: number, updateAtmDto: UpdateAtmDto) {
    return `This action updates a #${id} atm`;
  }

  remove(id: number) {
    return `This action removes a #${id} atm`;
  }
}
