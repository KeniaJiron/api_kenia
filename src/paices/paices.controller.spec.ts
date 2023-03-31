import { Test, TestingModule } from '@nestjs/testing';
import { PaicesController } from './paices.controller';
import { PaicesService } from './paices.service';

describe('PaicesController', () => {
  let controller: PaicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaicesController],
      providers: [PaicesService],
    }).compile();

    controller = module.get<PaicesController>(PaicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
