import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Api } from './entities/api.entity';
import { Repository } from 'typeorm';
export declare class ApisService {
    private apisRepository;
    constructor(apisRepository: Repository<Api>);
    create(createApiDto: CreateApiDto): string;
    findAll(): Promise<Api[]>;
    findOne(id: number): string;
    update(id: number, updateApiDto: UpdateApiDto): string;
    remove(id: number): string;
}
