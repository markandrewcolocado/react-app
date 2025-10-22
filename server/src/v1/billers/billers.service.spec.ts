import { Test, TestingModule } from '@nestjs/testing';
import { BillersService } from './billers.service';

describe('BillersService', () => {
  let service: BillersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillersService],
    }).compile();

    service = module.get<BillersService>(BillersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
