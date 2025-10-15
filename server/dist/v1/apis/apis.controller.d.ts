import { ApisService } from './apis.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
export declare class ApisController {
    private readonly apisService;
    constructor(apisService: ApisService);
    create(createApiDto: CreateApiDto): string;
    findAll(): Promise<import("./entities/api.entity").Api[]>;
    findOne(id: string): string;
    update(id: string, updateApiDto: UpdateApiDto): string;
    remove(id: string): string;
}
