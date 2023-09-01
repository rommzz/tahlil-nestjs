import { Module } from '@nestjs/common';
import { JamaahService } from './jamaah.service';
import { JamaahController } from './jamaah.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JamaahSchema, jamaahRef } from './schemas/jamaah.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: jamaahRef, schema: JamaahSchema }]),
  ],
  controllers: [JamaahController],
  providers: [JamaahService],
})
export class JamaahModule {}
