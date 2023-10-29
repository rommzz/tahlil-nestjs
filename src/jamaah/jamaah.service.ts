import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SuccessResponse } from 'src/success-response/success-response.interface';
import { CreateJamaahDto } from './dto/create-jamaah.dto';
import { UpdateJamaahDto } from './dto/update-jamaah.dto';
import { IJamaah } from './interface/jamaah.interface';

@Injectable()
export class JamaahService {
  constructor(@InjectModel('Jamaah') private jamaahModel: Model<IJamaah>) {}

  async create(createJamaahDto: CreateJamaahDto): Promise<boolean | null> {
    try {
      const jamaah = new this.jamaahModel(createJamaahDto);
      await jamaah.save();
      const res: SuccessResponse = {
        message: `Jamaah ${createJamaahDto.name} berhasil ditambahkan`,
      };
      return true;
    } catch (error) {
      const res: SuccessResponse = {
        message: `Jamaah ${createJamaahDto.name} gagal ditambahkan`,
      };
      throw new Error(error);
    }
  }
  async findAll(): Promise<Array<IJamaah>> {
    try {
      const res = await this.jamaahModel.find();
      return res;
    } catch (error) {
      throw new Error();
    }
  }

  async findOne(id: string): Promise<IJamaah | null> {
    try {
      return await this.jamaahModel.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateJamaahDto: UpdateJamaahDto) {
    try {
      const jamaah = await this.jamaahModel.findByIdAndUpdate(
        id,
        updateJamaahDto,
        {
          new: true,
        },
      );
      const res: SuccessResponse = {
        message: `Jamaah ${jamaah.name} berhasil diubah`,
      };
      return res;
    } catch (error) {
      const res: SuccessResponse = {
        message: `Jamaah ${updateJamaahDto.name} gagal diubah`,
      };
      return res;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} jamaah`;
  }
}
