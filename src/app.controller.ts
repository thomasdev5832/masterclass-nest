import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';

@Controller('app')
export class AppController {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Get('create')
  async createMember(@Body() body: CreateTeamMemberBody){
    
    const { name, role } = body;

    const member = await this.prisma.teamMember.create({
      data: {
        id: randomUUID(),
        name,
        role
      },
    });
    return {
      member,
    };
  }
}
