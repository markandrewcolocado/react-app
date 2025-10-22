import { AtmsService } from './atms.service';
import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';
export declare class AtmsController {
    private readonly atmsService;
    constructor(atmsService: AtmsService);
    create(env: string, createAtmDto: CreateAtmDto): Promise<any>;
    findAll(env: string): Promise<any>;
    findOne(env: string, id: string): Promise<any>;
    update(env: string, id: string, updateAtmDto: UpdateAtmDto): Promise<any>;
    remove(env: string, id: string): Promise<any>;
}
