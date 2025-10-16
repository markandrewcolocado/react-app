import { Test, TestingModule } from '@nestjs/testing';
import { MicroservicesController } from './microservices.controller';
import { MicroservicesService } from './microservices.service';

describe('MicroservicesController', () => {
  let controller: MicroservicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroservicesController],
      providers: [MicroservicesService],
    }).compile();

    controller = module.get<MicroservicesController>(MicroservicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
