import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { Reference } from 'src/reference/reference';

export type PeriodeJamaahDocument = HydratedDocument<PeriodeJamaah>;

@Schema()
export class PeriodeJamaah {
  @Prop({
    default: 0,
  })
  arisan: number;

  @Prop({
    required: true,
    type: MongoSchema.Types.ObjectId,
    ref: Reference.jamaahRef,
  })
  jamaahId: Types.ObjectId;

  @Prop({
    required: true,
    type: MongoSchema.Types.ObjectId,
    ref: Reference.periodeRef,
  })
  periodId: Types.ObjectId;

  @Prop({
    default: false,
  })
  isDone: boolean;

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: Reference.iuranRef,
  })
  iuranId: Types.ObjectId;
}

export const PeriodeJamaahSchema = SchemaFactory.createForClass(PeriodeJamaah);
