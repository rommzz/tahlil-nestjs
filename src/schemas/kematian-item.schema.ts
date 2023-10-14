import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema, Types } from 'mongoose';
import { Reference } from 'src/reference/reference';

export type KematianItemDocument = HydratedDocument<KematianItem>;

@Schema()
export class KematianItem {
  @Prop({
    validate: {
      validator: (v: number) => {
        return v > 0 || !!v;
      },
      message: 'index tidak boleh kosong',
    },
  })
  value: number;

  @Prop({
    required: true,
  })
  date: Date;

  @Prop({
    required: true,
    type: [MongoSchema.Types.ObjectId],
    ref: Reference.jamaahRef,
  })
  jamaah: Types.ObjectId[];
}

export const KematianItemSchema = SchemaFactory.createForClass(KematianItem);
