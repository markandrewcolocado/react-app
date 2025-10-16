import { MicroservicesService } from './microservices.service';
import { CreateMicroserviceDto } from './dto/create-microservice.dto';
import { UpdateMicroserviceDto } from './dto/update-microservice.dto';
export declare class MicroservicesController {
    private readonly microservicesService;
    constructor(microservicesService: MicroservicesService);
    create(createMicroserviceDto: CreateMicroserviceDto): string;
    findAll(env: string): Promise<import("./entities/apistatus.entity").Apistatus[]>;
    findOne(id: string): string;
    update(id: string, updateMicroserviceDto: UpdateMicroserviceDto): string;
    remove(id: string): string;
}
