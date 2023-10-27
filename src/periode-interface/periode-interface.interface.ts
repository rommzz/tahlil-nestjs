import { Document } from "mongoose";

export interface IPeriode extends Document {
    readonly startDate: Date,
    readonly endDate?: Date,
    readonly iuranId: string[],
    readonly arisan: number,
    readonly registeredJamaah: string[],
}
