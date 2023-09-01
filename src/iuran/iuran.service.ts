import { Injectable } from '@nestjs/common';
import { CreateIuranDto } from './dto/create-iuran.dto';
import { UpdateIuranDto } from './dto/update-iuran.dto';

@Injectable()
export class IuranService {
  create(createIuranDto: CreateIuranDto) {
    return 'This action adds a new iuran';
  }

  findAll() {
    return `This action returns all iuran`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iuran`;
  }

  update(id: number, updateIuranDto: UpdateIuranDto) {
    return `This action updates a #${id} iuran`;
  }

  remove(id: number) {
    return `This action removes a #${id} iuran`;
  }
}
