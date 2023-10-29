import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateIuranDto } from './dto/create-iuran.dto';
import { UpdateIuranDto } from './dto/update-iuran.dto';
import { IuranService } from './iuran.service';

@Controller('iuran')
export class IuranController {
  constructor(private readonly iuranService: IuranService) {}

  @Post()
  async create(@Body() createIuranDto: CreateIuranDto) {
    try {
      return await this.iuranService.create(createIuranDto);
    } catch (error) {
      console.log('cok', error);

      throw new InternalServerErrorException(error);
    }
  }

  @Get()
  findAll() {
    return this.iuranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iuranService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIuranDto: UpdateIuranDto) {
    return this.iuranService.update(+id, updateIuranDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iuranService.remove(+id);
  }
}
