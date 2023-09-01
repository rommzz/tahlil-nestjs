import { PartialType } from '@nestjs/mapped-types';
import { CreateJamaahDto } from './create-jamaah.dto';

export class UpdateJamaahDto extends PartialType(CreateJamaahDto) {}
