import { Body, Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sam')
  async getHelloSam(@Body('name') name: string, @Res() res: Response) {
    const data = new Promise((resolve, rej) => {
      const jsonData = {
        data: this.appService.getHelloSam(name),
      };
      resolve(jsonData);
    });

    res.status;
  }
}
