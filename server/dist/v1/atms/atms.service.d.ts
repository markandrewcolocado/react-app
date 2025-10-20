import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';
import { HttpService } from '@nestjs/axios';
export declare class AtmsService {
    private readonly api;
    constructor(api: HttpService);
    create(createAtmDto: CreateAtmDto): string;
    findAll(): Promise<import("axios").AxiosResponse<any, any, {}>>;
    findOne(id: number): string;
    update(id: number, updateAtmDto: UpdateAtmDto): string;
    remove(id: number): string;
}
