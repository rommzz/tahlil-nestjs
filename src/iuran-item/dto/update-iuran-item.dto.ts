import { PartialType } from '@nestjs/mapped-types';
import { CreateIuranItemDto } from './create-iuran-item.dto';

export class UpdateIuranItemDto extends PartialType(CreateIuranItemDto) {}
