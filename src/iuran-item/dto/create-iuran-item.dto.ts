import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateIuranItemDto {
  @IsString({ message: 'jamah harus berupa string' })
  @IsNotEmpty({ message: 'jamaah tidak boleh kosong' })
  readonly jamaahId: string;

  @IsArray()
  @IsOptional()
  readonly pastIuranItem?: string[];

  //nullabel number
  @IsNumber()
  @IsOptional()
  readonly kematian?: number;

  @IsNumber()
  @IsOptional()
  readonly deposit?: number;

  @IsNumber()
  @IsNotEmpty({ message: 'jumlah iuran tidak boleh kosong' })
  readonly iuran?: number;
}
