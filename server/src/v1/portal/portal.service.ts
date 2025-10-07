import { Injectable } from '@nestjs/common';
import { CreatePortalDto } from './dto/create-portal.dto';
import { UpdatePortalDto } from './dto/update-portal.dto';

@Injectable()
export class PortalService {
  create(createPortalDto: CreatePortalDto) {
    return 'This action adds a new portal';
  }

  findAll() {
    return `This action returns all portal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} portal`;
  }

  update(id: number, updatePortalDto: UpdatePortalDto) {
    return `This action updates a #${id} portal`;
  }

  remove(id: number) {
    return `This action removes a #${id} portal`;
  }
}
