import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IIuran } from "src/iuran-interface/iuran-interface.interface";
import { CreateIuranDto } from "src/iuran/dto/create-iuran.dto";

export class IuranClass {
	createIuranDto: CreateIuranDto

	constructor(
		createIuranDto: CreateIuranDto,
		@InjectModel('Iuran') private iuranModel: Model<IIuran>,
	) {
		this.createIuranInstance(createIuranDto)
	}
		
	createIuranInstance(data: CreateIuranDto) {
    let totalIuran = 0;
    data.iuranItem.forEach((item) => {
      totalIuran = totalIuran + item.iuran;
    });
		// const iuranItems: string [] = data.iuranItem.map(v =>)
    const iuran = new this.iuranModel({
      period: data.periodId,
      place: data.locationId,
      totalIuran: totalIuran,
    });
    return iuran;
  }
}
