import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { iuranItemRef } from 'src/iuran-item/schemas/iuran-item.schema';

export type PeriodeDocument = HydratedDocument<Periode>;

@Schema()
export class Periode {
  @Prop({
    required: true,
    validate: {
      validator: (v: number) => {
        return v > 0 || !!v;
      },
      message: 'index tidak boleh kosong',
    },
  })
  index: number;

  @Prop({
    required: true,
    validate: {
      validator: (v: string) => {
        return v.length > 0 || !!v;
      },
      message: 'Tanggal mulai boleh kosong',
    },
  })
  startDate: Date;

  @Prop({
    required: true,
    validate: {
      validator: (v: string) => {
        return v.length > 0 || !!v;
      },
      message: 'Tanggal mulai boleh kosong',
    },
  })
  endDate: Date;

  @Prop({
    required: true,
    type: [MongoSchema.Types.ObjectId],
    ref: iuranItemRef,
  })
  iuran: Types.ObjectId;

  @Prop({
    required: true,
  })
  createdAt: Date;
}

export const PeriodeSchema = SchemaFactory.createForClass(Periode);
export const periodeRef = 'Periode';
