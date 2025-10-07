import { CreatePortalDto } from './dto/create-portal.dto';
import { UpdatePortalDto } from './dto/update-portal.dto';
export declare class PortalService {
    create(createPortalDto: CreatePortalDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePortalDto: UpdatePortalDto): string;
    remove(id: number): string;
}
