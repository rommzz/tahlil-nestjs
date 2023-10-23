import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { Reference } from 'src/reference/reference';

export type JamaahDocument = HydratedDocument<Jamaah>;

@Schema()
export class Jamaah {
  @Prop()
  name: string;

  @Prop({
    default: 0,
  })
  deposit: number;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    default: Date.now,
  })
  updatedAt: Date;

  @Prop({
    default: null,
  })
  deletedAt: Date;

  @Prop({
    default: true,
  })
  isActive: boolean;

  @Prop({
    required: true,
    type: [MongoSchema.Types.ObjectId],
    ref: Reference.periodeJamaahRef,
  })
  periode: Types.ObjectId;
}

export const JamaahSchema = SchemaFactory.createForClass(Jamaah);
