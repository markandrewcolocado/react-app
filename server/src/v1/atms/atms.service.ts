import { Injectable } from '@nestjs/common';
import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AtmsService {
  constructor(private readonly api: HttpService) {}

  async create(createAtmDto: CreateAtmDto, env: string) {
    const uuid = uuidv4();
    const request = this.api.post(
      `http://172.18.2.24:8088/${env}/v1/atms`,
      { guid: uuid, ...createAtmDto }
    );
    const response = await lastValueFrom(request);

    return response.data;
  }

  async findAll(env: string) {
    const request = this.api.get(`http://172.18.2.24:8088/${env}/v1/atms`);
    const response = await firstValueFrom(request);

    return response.data;
  }

  async findOne(env: string, id: number) {
    const request = this.api.get(`http://172.18.2.24:8088/${env}/v1/atms/${id}`);
    const response = await lastValueFrom(request)

    return response.data;
  }

  async update(env: string, id: number, updateAtmDto: UpdateAtmDto) {
    const request = this.api.put(
      `http://172.18.2.24:8088/${env}/v1/atms/${id}`,
      updateAtmDto
    );
    const response = await lastValueFrom(request);
    console.log(response.data);
    return response.data;
  }

  async remove(env: string, id: number) {
    const request = this.api.delete(`http://172.18.2.24:8088/${env}/v1/atms/${id}`);
    const response = await lastValueFrom(request);

    return response.data;
  }
}
