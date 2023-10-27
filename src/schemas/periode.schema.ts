import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { Reference } from 'src/reference/reference';

export type PeriodeDocument = HydratedDocument<Periode>;

@Schema()
export class Periode {

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

  @Prop()
  endDate: Date;

  @Prop({
    required: true,
    type: [MongoSchema.Types.ObjectId],
    ref: Reference.iuranRef,
  })
  iuranId: Types.ObjectId[];

  @Prop({
    required: true,
  })
  arisan: number;

  @Prop()
  kematian: number;

  @Prop({
    required: true,
    type: [MongoSchema.Types.ObjectId],
    ref: Reference.jamaahRef,
  })
  registeredJamaah: Types.ObjectId[];
}

export const PeriodeSchema = SchemaFactory.createForClass(Periode);
