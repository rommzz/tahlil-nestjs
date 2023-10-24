import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPeriode } from 'src/periode-interface/periode-interface.interface';
import { CreateIuranDto } from './dto/create-iuran.dto';
import { UpdateIuranDto } from './dto/update-iuran.dto';
import { IIuran } from 'src/iuran-interface/iuran-interface.interface';
import { IIuranItem } from 'src/iuran-item-interface/iuran-item-interface.interface';
import { CreateIuranItemDto } from 'src/iuran-item/dto/create-iuran-item.dto';

@Injectable()
export class IuranService {
  constructor(
    @InjectModel('Iuran') private iuranModel: Model<IIuran>,
    @InjectModel('Periode') private periodeModel: Model<IPeriode>,
    @InjectModel('IuranItem') private iuranItemModel: Model<IIuranItem>,
  ) {}
  async create(createIuranDto: CreateIuranDto) {
    const { isNewPeriod } = createIuranDto;
    let periode = isNewPeriod
      ? new this.periodeModel()
      : await this.periodeModel.findById(createIuranDto.periodId);
    try {
      if (isNewPeriod) {
        periode = new this.periodeModel({
          arisan: createIuranDto.periodData.arisan,
          startDate: Date.now(),
          listJamaah: [createIuranDto.locationId],
        });
      } else {
      }
      return createIuranDto;
    } catch (error) {
      throw error;
    }
  }

  createIuranInstance(createIuranDto: CreateIuranDto) {
    let totalIuran = 0;
    createIuranDto.iuranItem.forEach((item) => {
      totalIuran = totalIuran + item.iuran;
    });
		const iuranItems: string [] = createIuranDto.iuranItem.map(v =>)
    const iuran = new this.iuranModel({
      period: createIuranDto.periodId,
      place: createIuranDto.locationId,
      totalIuran: totalIuran,
    });
    return iuran;
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
