import { CreateMicroserviceDto } from './dto/create-microservice.dto';
import { UpdateMicroserviceDto } from './dto/update-microservice.dto';
export declare class MicroservicesService {
    constructor();
    create(createMicroserviceDto: CreateMicroserviceDto): string;
    findAll(env: string): string;
    findOne(id: number): string;
    update(id: number, updateMicroserviceDto: UpdateMicroserviceDto): string;
    remove(id: number): string;
}
