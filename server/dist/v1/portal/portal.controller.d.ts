import { PortalService } from './portal.service';
import { CreatePortalDto } from './dto/create-portal.dto';
import { UpdatePortalDto } from './dto/update-portal.dto';
export declare class PortalController {
    private readonly portalService;
    constructor(portalService: PortalService);
    create(createPortalDto: CreatePortalDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePortalDto: UpdatePortalDto): string;
    remove(id: string): string;
}
