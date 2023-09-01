import { Test, TestingModule } from '@nestjs/testing';
import { JamaahService } from './jamaah.service';

describe('JamaahService', () => {
  let service: JamaahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JamaahService],
    }).compile();

    service = module.get<JamaahService>(JamaahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
