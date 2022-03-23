import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({
    description: 'The result of calling "getHello"',
    type: Number,
  })
  @Get()
  getHello(): number {
    return this.appService.getHello().length;
  }
}
