import { Module } from '@nestjs/common';
import { IuranService } from './iuran.service';
import { IuranController } from './iuran.controller';

@Module({
  controllers: [IuranController],
  providers: [IuranService],
})
export class IuranModule {}
