import { Transform, Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDate,
  IsDateString,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
  isNotEmpty,
} from 'class-validator';
import { CreateIuranItemDto } from 'src/iuran-item/dto/create-iuran-item.dto';
import { PeriodNew } from './create-new-period.dto';

export class CreateIuranDto {
  @IsBoolean({ message: 'isNewPeriod must be a boolean' })
  readonly isNewPeriod: boolean = false;

  @IsDate()
  @IsNotEmpty({ message: 'tanggal tidak boleh kosong' })
  @Transform(({ value }) => new Date(value)) // Transform the input string to a Date object
  readonly date: Date;

  @IsNotEmpty({ message: 'lokasi tidak boleh kosong' })
  @IsString({ message: 'lokasi harus berupa string' })
  readonly locationId: string;

  @IsString({ message: 'periode harus berupa string' })
  @IsNotEmpty()
  @ValidateIf((o) => o.isNewPeriod === false)
  readonly periodId?: string;

  @ValidateIf((o) => o.isNewPeriod === true)
  @ValidateNested({ each: true })
  @Type(() => PeriodNew)
  readonly periodData?: PeriodNew;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => CreateIuranItemDto)
  readonly iuranItem: CreateIuranItemDto[];
}
