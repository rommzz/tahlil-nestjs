import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/success-interceptor/success-interceptor';
import { CreateJamaahDto } from './dto/create-jamaah.dto';
import { UpdateJamaahDto } from './dto/update-jamaah.dto';
import { JamaahService } from './jamaah.service';

@Controller('jamaah')
export class JamaahController {
  constructor(private readonly jamaahService: JamaahService) {}

  @Post()
  create(@Body() createJamaahDto: CreateJamaahDto) {
    return this.jamaahService.create(createJamaahDto);
  }

  @Get()
  async findAll() {
    try {
      const data = await this.jamaahService.findAll();
      if (data.length == 0) {
        throw NotFoundException
      }
     
      return new SuccessInterceptor(data, 'Data jamaah berhasil ditemukan');
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const res = await this.jamaahService.findOne(id);
      
      if (res == null) {
        throw new NotFoundException(`Jamaah dengan id ${id} tidak ditemukan`);
      }
      return new SuccessInterceptor(res, `Jamaah dengan id ${id} berhasil ditemukan`);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      throw new InternalServerErrorException(error) 
    }
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
