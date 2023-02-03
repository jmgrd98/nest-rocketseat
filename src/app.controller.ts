import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { Post, Put } from '@nestjs/common/decorators';
import { randomUUID } from 'crypto';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello(): Promise<object> {
    const user = await this.prisma.Usuario.create({
      data: {
        id: randomUUID(),
        name: 'João',
        function: 'Codar',
      },
    })
    return user;
  }

  @Get('hello2')
  async getHello2(): Promise<object> {
    const user = await this.prisma.Usuario.create({
      data: {
        id: randomUUID(),
        name: 'Marcelo',
        function: 'Dormir',
      },
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
