import { ApisService } from './apis.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { ApiPaginationDto } from './dto/api-pagination.dto';
export declare class ApisController {
    private readonly apisService;
    constructor(apisService: ApisService);
    create(createApiDto: CreateApiDto): string;
    findAll(apiPaginationDto: ApiPaginationDto): string;
    findOne(id: string): string;
    update(id: string, updateApiDto: UpdateApiDto): string;
    remove(id: string): string;
}
