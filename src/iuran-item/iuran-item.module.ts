import { Module } from '@nestjs/common';
import { IuranItemService } from './iuran-item.service';
import { IuranItemController } from './iuran-item.controller';

@Module({
  controllers: [IuranItemController],
  providers: [IuranItemService],
})
export class IuranItemModule {}
