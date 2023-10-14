import { IsNotEmpty, IsNumber } from 'class-validator';

export class PeriodNew {
  @IsNumber({})
  @IsNotEmpty({ message: 'periode arisan harus diisi' })
  readonly arisan: number;

  @IsNumber({})
  @IsNotEmpty({ message: 'periode kematian harus diisi' })
  readonly kematian: number;
}
