import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Api } from './entities/api.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApisService {
  constructor(
    @InjectRepository(Api)
    private apisRepository: Repository<Api>
  ) {}

  create(createApiDto: CreateApiDto) {
    return 'This action adds a new api';
  }

  findAll() {
    // return this.apisRepository.find();
    return `This action returns all apis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} api`;
  }

  update(id: number, updateApiDto: UpdateApiDto) {
    return `This action updates a #${id} api`;
  }

  remove(id: number) {
    return `This action removes a #${id} api`;
  }
}
