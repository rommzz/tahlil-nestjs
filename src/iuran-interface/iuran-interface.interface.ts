import { Document } from 'mongoose';

export interface IIuran extends Document {
  readonly date: Date;
  readonly totalIuran: number;
  readonly iuranItems: string[];
  readonly place: string;
  readonly period: string;
}
