import { Test, TestingModule } from '@nestjs/testing';
import { IuranService } from './iuran.service';

describe('IuranService', () => {
  let service: IuranService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IuranService],
    }).compile();

    service = module.get<IuranService>(IuranService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
