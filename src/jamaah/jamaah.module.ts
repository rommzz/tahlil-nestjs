import { Module } from '@nestjs/common';
import { JamaahService } from './jamaah.service';
import { JamaahController } from './jamaah.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JamaahSchema } from './schemas/jamaah.schema';
import { Reference } from 'src/reference/reference';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reference.jamaahRef, schema: JamaahSchema },
    ]),
  ],
  controllers: [JamaahController],
  providers: [JamaahService],
})
export class JamaahModule {}
