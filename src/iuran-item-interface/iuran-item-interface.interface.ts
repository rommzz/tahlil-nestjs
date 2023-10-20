import { Document } from "mongoose";

export interface IIuranItem extends Document{
      jamaah: string,
      iuran: string,
      periode: string,
      value: number,
      isPaid: boolean,
      charity?: number,
}
