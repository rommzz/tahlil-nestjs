import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Jamaah>;

@Schema()
export class Jamaah {
  @Prop()
  name: string;

  @Prop()
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
}

export const JamaahSchema = SchemaFactory.createForClass(Jamaah);
export const jamaahRef = 'Jamaah';
