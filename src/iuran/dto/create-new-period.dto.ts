import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class PeriodNew {
  @IsNumber({})
  @IsNotEmpty({ message: 'periode arisan harus diisi' })
  readonly arisan: number;

}
