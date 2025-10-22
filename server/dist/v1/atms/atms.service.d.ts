import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';
import { HttpService } from '@nestjs/axios';
export declare class AtmsService {
    private readonly api;
    constructor(api: HttpService);
    create(createAtmDto: CreateAtmDto, env: string): Promise<any>;
    findAll(env: string): Promise<any>;
    findOne(env: string, id: number): Promise<any>;
    update(env: string, id: number, updateAtmDto: UpdateAtmDto): Promise<any>;
    remove(env: string, id: number): Promise<any>;
}
