import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { IPeriode } from 'src/periode-interface/periode-interface.interface';
import { CreateIuranDto } from './dto/create-iuran.dto';
import { UpdateIuranDto } from './dto/update-iuran.dto';
import { IIuran } from 'src/iuran-interface/iuran-interface.interface';
import { IIuranItem } from 'src/iuran-item-interface/iuran-item-interface.interface';
import { CreateIuranItemDto } from 'src/iuran-item/dto/create-iuran-item.dto';
import { IJamaah } from 'src/jamaah/interface/jamaah.interface';
import { IPeriodJamaah as IPeriodeJamaah } from 'src/period-jamaah-interface/period-jamaah-interface.interface';

@Injectable()
export class IuranService {
  constructor(
    @InjectModel('Iuran') private iuranModel: Model<IIuran>,
    @InjectModel('Periode') private periodeModel: Model<IPeriode>,
    @InjectModel('IuranItem') private iuranItemModel: Model<IIuranItem>,
    @InjectModel('Jamaah') private jamaahModel: Model<IJamaah>,
    @InjectModel('PeriodeJamaah') private periodeJamaahModel: Model<IPeriodeJamaah>,
  ) {}
  async create(createIuranDto: CreateIuranDto) {
    const session = await this.iuranModel.db.startSession();
    session.startTransaction();

    try {
      console.log('oi');
      
      const locationId = await this.jamaahModel.findById(createIuranDto.locationId);

      if (locationId == null) {
        throw new NotFoundException(`jamaah ${createIuranDto.locationId} tidak ditemukan`);
      }

      const { isNewPeriod } = createIuranDto;
      let periode = isNewPeriod
        ? new this.periodeModel()
        : await this.periodeModel.findById(createIuranDto.periodId);
        let periodeJamaah: IPeriodeJamaah[] = []
      if (isNewPeriod) {
        const jamaah = await this.jamaahModel.find();
        
        periode = new this.periodeModel({
          arisan: createIuranDto.periodData.arisan,
          startDate: Date.now(),
          registeredJamaah: jamaah.map((item) => item._id),
          iuranId: [],
        });
        jamaah.forEach((item) => {
          periodeJamaah.push(new this.periodeJamaahModel({
            jamaahId: item._id,
            periodId: periode._id,
            isPaid: false,
          }))
        })
      } else {
        periode = await this.periodeModel.findById(createIuranDto.periodId);
        if (periode == null) {
          throw new Error('Periode tidak ditemukan');
        }
      }

      const iuran = this.createIuranInstance(createIuranDto, periode._id);
      console.log('iuran', iuran);
      
      const iuranItem = await this.createIuranItemInstance(createIuranDto, periode._id, iuran._id);

      //add iuranId to periode
      periode.iuranId.push(iuran._id);

      console.log('periode', periode);
      
      console.log('end');
      if (isNewPeriod) {
        periodeJamaah.forEach((item) => {
          console.log(item.jamaahId.valueOf() == locationId._id.valueOf());
          console.log(item.periodId.valueOf(), periode._id.valueOf());
          
          if (item.jamaahId.valueOf() == locationId._id.valueOf() && item.periodId.valueOf() == periode._id.valueOf()) {
            item.iuranId = iuran._id
            item.isDone = true
            item.arisan = iuran.totalIuran
          }
        })
      }
      console.log('periodeJamaah', periodeJamaah);
      await Promise.all([
        periode.save({ session }),
        iuran.save({ session }),
        this.iuranItemModel.insertMany(iuranItem, { session }),
        this.periodeJamaahModel.insertMany(periodeJamaah, { session }),
      ])

      await session.commitTransaction();
      session.endSession();
      // console.log(periode, iuran, iuranItem);

      
      

      return true;
    } catch (error) {
      console.log('cok', error);
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  }

  createIuranInstance(createIuranDto: CreateIuranDto, periodId: string): IIuran {
    try {
      let totalIuran = 0;
      createIuranDto.iuranItem.forEach((item) => {
        totalIuran = totalIuran + item.iuran;
      });
      const iuran = new this.iuranModel({
        periodId: periodId,
        place: createIuranDto.locationId,
        totalIuran: totalIuran,
        date: createIuranDto.date,
      });
      return iuran; 
    } catch (error) {
      throw error;
    }
  }

  async createIuranItemInstance(createIuranDto: CreateIuranDto, periodId: string, iuranId: string): Promise<IIuranItem[]> {
    try {
      let iuranItem = []
      let jamaah = await this.jamaahModel.find();
      createIuranDto.iuranItem.forEach(async (item) =>  {
        const j = await this.jamaahModel.findById(item.jamaahId)
        if (j == null) {
          throw new NotFoundException(`jamaah ${item.jamaahId} tidak ditemukan`);
        }
        iuranItem.push(new this.iuranItemModel({
          jamaah: item.jamaahId,
          iuran: item.iuran,
          iuranId: iuranId,
          isPaid: false,
          periodId: periodId,
        }))
        jamaah.splice(jamaah.findIndex((jamaah) => jamaah._id == item.jamaahId), 1)
      })
      jamaah.forEach((item) => {
        iuranItem.push(new this.iuranItemModel({
          jamaah: item._id,
          iuran: 0,
          iuranId: iuranId,
          isPaid: false,
          periodId: periodId,
        }))
      })
      return iuranItem
    } catch (error) {
      console.log(error);
      
      throw error
    }
  }

  async updatePeriodeJamaah(periodId: string, jamaahId: string, isNewPeriod: boolean, iuranId: string) {
    if (isNewPeriod) {

      
    }
  }

  findAll() {
    return `This action returns all iuran`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iuran`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateIuranDto: UpdateIuranDto) {
    return `This action updates a #${id} iuran`;
  }

  remove(id: number) {
    return `This action removes a #${id} iuran`;
  }
}
