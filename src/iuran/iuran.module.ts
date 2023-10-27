import { Module } from '@nestjs/common';
import { IuranService } from './iuran.service';
import { IuranController } from './iuran.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reference } from 'src/reference/reference';
import { IuranSchema } from './schemas/iuran.schema';
import { PeriodeSchema } from 'src/schemas/periode.schema';
import { IuranItemSchema } from 'src/iuran-item/schemas/iuran-item.schema';
import { JamaahSchema } from 'src/jamaah/schemas/jamaah.schema';
import { PeriodeJamaahSchema } from 'src/schemas/periode-jamaah.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reference.iuranRef, schema: IuranSchema },
      { name: Reference.periodeRef, schema: PeriodeSchema },
      { name: Reference.iuranItemRef, schema: IuranItemSchema },
      { name: Reference.jamaahRef, schema: JamaahSchema },
      { name: Reference.periodeJamaahRef, schema: PeriodeJamaahSchema },
    ]),
  ],
  controllers: [IuranController],
  providers: [IuranService],
})
export class IuranModule {}
