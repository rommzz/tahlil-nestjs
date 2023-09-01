import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { iuranItemRef } from 'src/iuran-item/schemas/iuran-item.schema';
import { jamaahRef } from 'src/jamaah/schemas/jamaah.schema';
import { periodeRef } from 'src/schemas/periode.schema';

export type IuranItemDocument = HydratedDocument<Iuran>;

@Schema()
export class Iuran {
  @Prop({
    required: true,
  })
  date: Date;

  @Prop()
  totalIuran: number;

  @Prop({
    type: [MongoSchema.Types.ObjectId],
    ref: iuranItemRef,
  })
  iuranItems: Types.ObjectId;

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: jamaahRef,
  })
  place: Types.ObjectId;

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: periodeRef,
  })
  period: Types.ObjectId;
}

export const IuranSchema = SchemaFactory.createForClass(Iuran);
export const iuranRef = 'Iuran';
