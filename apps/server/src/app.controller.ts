import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({
    description: 'The result of calling "getHello"',
    type: String,
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
