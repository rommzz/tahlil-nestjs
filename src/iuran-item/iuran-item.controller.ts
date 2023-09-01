import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IuranItemService } from './iuran-item.service';
import { CreateIuranItemDto } from './dto/create-iuran-item.dto';
import { UpdateIuranItemDto } from './dto/update-iuran-item.dto';

@Controller('iuran-item')
export class IuranItemController {
  constructor(private readonly iuranItemService: IuranItemService) {}

  @Post()
  create(@Body() createIuranItemDto: CreateIuranItemDto) {
    return this.iuranItemService.create(createIuranItemDto);
  }

  @Get()
  findAll() {
    return this.iuranItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iuranItemService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIuranItemDto: UpdateIuranItemDto,
  ) {
    return this.iuranItemService.update(+id, updateIuranItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iuranItemService.remove(+id);
  }
}
