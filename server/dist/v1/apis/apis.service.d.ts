import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { ApiPaginationDto } from './dto/api-pagination.dto';
export declare class ApisService {
    constructor();
    create(createApiDto: CreateApiDto): string;
    findAll(apiPaginationDto: ApiPaginationDto): string;
    private buildPaginationQuery;
    findOne(id: number): string;
    update(id: number, updateApiDto: UpdateApiDto): string;
    remove(id: number): string;
}
