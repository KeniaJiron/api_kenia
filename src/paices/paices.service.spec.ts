import { Test, TestingModule } from '@nestjs/testing';
import { PaicesService } from './paices.service';

describe('PaicesService', () => {
  let service: PaicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaicesService],
    }).compile();

    service = module.get<PaicesService>(PaicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
