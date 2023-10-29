import { IsNotEmpty, IsNumber } from 'class-validator';

export class PeriodNew {
  @IsNumber({})
  @IsNotEmpty({ message: 'arisan harus diisi' })
  readonly arisan: number;
}
