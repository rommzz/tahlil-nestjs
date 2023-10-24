import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateIuranItemDto {
  @IsString({ message: 'jamaah harus berupa string' })
  @IsNotEmpty({ message: 'jamaah tidak boleh kosong' })
  readonly jamaahId: string;

  @IsArray()
  @IsOptional()
  readonly pastIuranItem?: string[];

  @IsNumber()
  @IsOptional()
  readonly kematian?: number;

  @IsNumber()
  @IsOptional()
  readonly deposit?: number;

  @IsNumber()
  @IsNotEmpty({ message: 'jumlah iuran tidak boleh kosong (Rp)' })
  readonly iuran: number;
}
