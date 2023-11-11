import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { MembersRepository } from './repositories/members-repository';

@Controller('app')
export class AppController {
  constructor(
    private membersRepository: MembersRepository,
  ) {}

  @Post('create')
  async createMember(@Body() body: CreateTeamMemberBody){
    const { name, role } = body;
    await this.membersRepository.create(name, role);
  }
}
