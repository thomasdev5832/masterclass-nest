import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Get('create')
  async getHello(){
    const member = await this.prisma.teamMember.create({
      data: {
        id: 'captain',
        name: 'Rafa',
        function: 'Fighter'
      },
    });
    return {
      member,
    };
  }
}
