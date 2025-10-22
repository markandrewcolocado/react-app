import { Test, TestingModule } from '@nestjs/testing';
import { BillersController } from './billers.controller';
import { BillersService } from './billers.service';

describe('BillersController', () => {
  let controller: BillersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillersController],
      providers: [BillersService],
    }).compile();

    controller = module.get<BillersController>(BillersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
