import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Api } from './entities/api.entity';
import { ApiPaginationDto } from './dto/api-pagination.dto';

@Injectable()
export class ApisService {
  constructor(
    @InjectRepository(Api)
    private apisRepository: Repository<Api>
  ) {}

  create(createApiDto: CreateApiDto) {
    return 'This action adds a new api';
  }

  findAll(apiPaginationDto: ApiPaginationDto) {
    const query = this.buildPaginationQuery(apiPaginationDto);

    return this.apisRepository.find(query);
  }

  private buildPaginationQuery(apiPaginationDto: ApiPaginationDto) {
    const { provider, catalog, limit, offset } = apiPaginationDto;

    // Provider is required when Catalog is supplied, and the other way around
    if (provider || catalog) {
      // TODO: Create a universal error catcher
      if (!provider || !catalog) throw new Error('Provider & Catalog should have values.');
    }

    if (offset && !limit) throw new Error('Offset and Limit should have values.');

    return {
      where: { provider, catalog },
      skip: offset ?? undefined, // Skip the specified number of records (offset)
      take: limit ?? undefined,   // Number of records to fetch per page (limit)
    }
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
