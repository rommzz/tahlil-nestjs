import { Document } from "mongoose";

export interface IIuranItem extends Document{
      jamaahId: string,
      iuranId: string,
      periodId: string,
      iuran: number,
      isPaid: boolean,
      charity?: number,
}
