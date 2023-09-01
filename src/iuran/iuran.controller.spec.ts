import { Test, TestingModule } from '@nestjs/testing';
import { IuranController } from './iuran.controller';
import { IuranService } from './iuran.service';

describe('IuranController', () => {
  let controller: IuranController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IuranController],
      providers: [IuranService],
    }).compile();

    controller = module.get<IuranController>(IuranController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
