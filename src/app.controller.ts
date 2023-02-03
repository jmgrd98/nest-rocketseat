import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { Post, Put } from '@nestjs/common/decorators';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello(): Promise<string> {
    const user = await this.prisma.User.create({
      data: {
        id: '1',
        name: 'João',
        function: 'Codar',
      }
    })
    return user;
  }

  @Get('goodbye')
  getGoodbye(): string {
    return 'goodbye';
  }

  // @Post(){

  // }
}
