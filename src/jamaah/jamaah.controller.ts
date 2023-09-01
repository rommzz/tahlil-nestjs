import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JamaahService } from './jamaah.service';
import { CreateJamaahDto } from './dto/create-jamaah.dto';
import { UpdateJamaahDto } from './dto/update-jamaah.dto';

@Controller('jamaah')
export class JamaahController {
  constructor(private readonly jamaahService: JamaahService) {}

  @Post()
  create(@Body() createJamaahDto: CreateJamaahDto) {
    return this.jamaahService.create(createJamaahDto);
  }

  @Get()
  findAll() {
    return this.jamaahService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jamaahService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJamaahDto: UpdateJamaahDto) {
    return this.jamaahService.update(id, updateJamaahDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jamaahService.remove(+id);
  }
}
