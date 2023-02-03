import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor() {}

  @Get('hello')
  getHello(): string {
    return 'yooooooo';
  }
}
