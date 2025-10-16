import { CreateMicroserviceDto } from './dto/create-microservice.dto';
import { UpdateMicroserviceDto } from './dto/update-microservice.dto';
import { Apistatus } from './entities/apistatus.entity';
import { Repository } from 'typeorm';
export declare class MicroservicesService {
    private apiStatusRepository;
    constructor(apiStatusRepository: Repository<Apistatus>);
    create(createMicroserviceDto: CreateMicroserviceDto): string;
    findAll(env: string): Promise<Apistatus[]>;
    findOne(id: number): string;
    update(id: number, updateMicroserviceDto: UpdateMicroserviceDto): string;
    remove(id: number): string;
}
