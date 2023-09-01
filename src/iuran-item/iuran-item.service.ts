import { Injectable } from '@nestjs/common';
import { CreateIuranItemDto } from './dto/create-iuran-item.dto';
import { UpdateIuranItemDto } from './dto/update-iuran-item.dto';

@Injectable()
export class IuranItemService {
  create(createIuranItemDto: CreateIuranItemDto) {
    return 'This action adds a new iuranItem';
  }

  findAll() {
    return `This action returns all iuranItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iuranItem`;
  }

  update(id: number, updateIuranItemDto: UpdateIuranItemDto) {
    return `This action updates a #${id} iuranItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} iuranItem`;
  }
}
