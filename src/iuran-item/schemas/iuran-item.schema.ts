import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { Reference } from 'src/reference/reference';

export type IuranItemDocument = HydratedDocument<IuranItem>;

@Schema()
export class IuranItem {
  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: Reference.jamaahRef,
  })
  jamaahId: Types.ObjectId;

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: Reference.iuranRef,
  })
  iuranId: Types.ObjectId;

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: Reference.periodeRef,
  })
  periodId: Types.ObjectId;

  @Prop({ default: 0 })
  value: number;

  @Prop({
    required: true,
  })
  isPaid: boolean;

  @Prop()
  charity: number;
}

export const IuranItemSchema = SchemaFactory.createForClass(IuranItem);
