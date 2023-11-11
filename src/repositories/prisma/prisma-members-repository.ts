import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/database/prisma.service";
import { MembersRepository } from "../members-repository"
import { randomUUID } from "node:crypto";

@Injectable()
export class PrismaMembersRepository implements MembersRepository {
    constructor(private prisma: PrismaService){}

    async create(name: string, role: string): Promise<void> {
        await this.prisma.teamMember.create({
            data: {
                id: randomUUID(),
                name,
                role
            }
        });
    }
}