import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { jamaahRef } from 'src/jamaah/schemas/jamaah.schema';

export type IuranItemDocument = HydratedDocument<IuranItem>;

@Schema()
export class IuranItem {
  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: jamaahRef,
  })
  jamaah: Types.ObjectId;

  @Prop()
  iuran;

  @Prop()
  value: number;

  @Prop({
    default: false,
  })
  isArrears: boolean;

  @Prop({
    required: true,
  })
  isPaid: boolean;

  @Prop()
  charity: number;
}

export const IuranItemSchema = SchemaFactory.createForClass(IuranItem);
export const iuranItemRef = 'IuranItem';
