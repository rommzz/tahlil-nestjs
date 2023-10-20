import { Module } from '@nestjs/common';
import { IuranService } from './iuran.service';
import { IuranController } from './iuran.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reference } from 'src/reference/reference';
import { IuranSchema } from './schemas/iuran.schema';
import { PeriodeSchema } from 'src/schemas/periode.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reference.iuranRef, schema: IuranSchema },
      { name: Reference.periodeRef, schema: PeriodeSchema },
    ]),
  ],
  controllers: [IuranController],
  providers: [IuranService],
})
export class IuranModule {}
