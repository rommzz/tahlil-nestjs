import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { Reference } from 'src/reference/reference';

export type PeriodeJamaahDocument = HydratedDocument<PeriodeJamaah>;

@Schema()
export class PeriodeJamaah {
  @Prop({
    validate: {
      validator: (v: number) => {
        return v > 0 || !!v;
      },
      message: 'arisan tidak boleh kosong',
    },
  })
  arisan: number;

  @Prop({
    required: true,
    type: [MongoSchema.Types.ObjectId],
    ref: Reference.periodeRef,
  })
  periode: Types.ObjectId;

  @Prop({
    required: true,
    type: [MongoSchema.Types.ObjectId],
    ref: Reference.jamaahRef,
  })
  jamaah: Types.ObjectId;
}

export const PeriodeJamaahSchema = SchemaFactory.createForClass(PeriodeJamaah);
