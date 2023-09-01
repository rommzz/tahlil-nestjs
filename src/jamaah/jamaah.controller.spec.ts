import { Test, TestingModule } from '@nestjs/testing';
import { JamaahController } from './jamaah.controller';
import { JamaahService } from './jamaah.service';

describe('JamaahController', () => {
  let controller: JamaahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JamaahController],
      providers: [JamaahService],
    }).compile();

    controller = module.get<JamaahController>(JamaahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
