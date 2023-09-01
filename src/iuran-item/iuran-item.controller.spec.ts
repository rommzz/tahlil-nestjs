import { Test, TestingModule } from '@nestjs/testing';
import { IuranItemController } from './iuran-item.controller';
import { IuranItemService } from './iuran-item.service';

describe('IuranItemController', () => {
  let controller: IuranItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IuranItemController],
      providers: [IuranItemService],
    }).compile();

    controller = module.get<IuranItemController>(IuranItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
