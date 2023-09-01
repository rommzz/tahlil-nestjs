import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IuranItem } from './iuran-item/entities/iuran-item.entity';
import { IuranModule } from './iuran/iuran.module';
import { JamaahModule } from './jamaah/jamaah.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'tahlildb' }),
    JamaahModule,
    IuranModule,
    IuranItem,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
