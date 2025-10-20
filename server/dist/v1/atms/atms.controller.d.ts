import { AtmsService } from './atms.service';
import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';
export declare class AtmsController {
    private readonly atmsService;
    constructor(atmsService: AtmsService);
    create(createAtmDto: CreateAtmDto): string;
    findAll(): Promise<import("axios").AxiosResponse<any, any, {}>>;
    findOne(id: string): string;
    update(id: string, updateAtmDto: UpdateAtmDto): string;
    remove(id: string): string;
}
