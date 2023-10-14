import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateJamaahDto {
  @IsString({ message: 'Name must be a string' })
  @MaxLength(30, {
    message: 'Nama tidak boleh lebih dari 30 karakter',
  })
  @IsNotEmpty({ message: 'Name tidak boleh kosong' })
  readonly name: string;
}
