import { Test, TestingModule } from '@nestjs/testing';
import { IuranItemService } from './iuran-item.service';

describe('IuranItemService', () => {
  let service: IuranItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IuranItemService],
    }).compile();

    service = module.get<IuranItemService>(IuranItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
