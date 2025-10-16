import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Repository } from 'typeorm';
import { Api } from './entities/api.entity';
import { ApiPaginationDto } from './dto/api-pagination.dto';
export declare class ApisService {
    private apisRepository;
    constructor(apisRepository: Repository<Api>);
    create(createApiDto: CreateApiDto): string;
    findAll(apiPaginationDto: ApiPaginationDto): Promise<Api[]>;
    private buildPaginationQuery;
    findOne(id: number): string;
    update(id: number, updateApiDto: UpdateApiDto): string;
    remove(id: number): string;
}
