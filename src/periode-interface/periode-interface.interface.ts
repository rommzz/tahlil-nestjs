import { Document } from "mongoose";

export interface IPeriode extends Document {
    readonly startDate: Date,
    readonly endDate?: Date,
    readonly iuran: string[],
    readonly arisan: number,
    readonly listJamaah: string[],
}
