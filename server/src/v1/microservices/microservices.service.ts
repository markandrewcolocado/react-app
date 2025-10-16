import { Injectable } from '@nestjs/common';
import { CreateMicroserviceDto } from './dto/create-microservice.dto';
import { UpdateMicroserviceDto } from './dto/update-microservice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Apistatus } from './entities/apistatus.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MicroservicesService {
  constructor(
    @InjectRepository(Apistatus)
    private apiStatusRepository: Repository<Apistatus>
  ) {}

  create(createMicroserviceDto: CreateMicroserviceDto) {
    return 'This action adds a new microservice';
  }

  findAll(env: string) {
    if (!env) throw new Error('Environment is required.');

    return this.apiStatusRepository.find({
      where: {
        environment: env
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} microservice`;
  }

  update(id: number, updateMicroserviceDto: UpdateMicroserviceDto) {
    return `This action updates a #${id} microservice`;
  }

  remove(id: number) {
    return `This action removes a #${id} microservice`;
  }
}
