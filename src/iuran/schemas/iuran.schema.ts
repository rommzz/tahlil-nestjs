import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { Reference } from 'src/reference/reference';

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
    ref: Reference.iuranItemRef,
  })
  iuranItems: Types.ObjectId[];

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: Reference.jamaahRef,
  })
  place: Types.ObjectId;

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: Reference.periodeRef,
  })
  period: Types.ObjectId;
}

export const IuranSchema = SchemaFactory.createForClass(Iuran);
