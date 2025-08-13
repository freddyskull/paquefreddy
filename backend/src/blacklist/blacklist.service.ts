import { Injectable } from '@nestjs/common';
import { CreateBlacklistDto } from './dto/create-blacklist.dto';
import { UpdateBlacklistDto } from './dto/update-blacklist.dto';
import { Blacklist } from './entities/blacklist.entity';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BlacklistService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  private blacklist: Blacklist[] = [];

  // async create(dto: CreateBlacklistDto) {
  //   await this.prisma.black_list.create({
  //     data: {
  //       ...dto,
  //     }
  //   });

  //   return { status: 'ok', message: 'Categoría creada correctamente' };
  // }

  findAll(): Blacklist[] {
    return this.blacklist;
  }

  findOne(id: number): Blacklist | undefined {
    return this.blacklist.find((item) => item.id === id);
  }

  update(id: number, updateBlacklistDto: UpdateBlacklistDto): Blacklist | null {
    const index = this.blacklist.findIndex((item) => item.id === id);
    if (index === -1) return null;
    this.blacklist[index] = { ...this.blacklist[index], ...updateBlacklistDto };
    return this.blacklist[index];
  }

  remove(id: number): Blacklist | null {
    const index = this.blacklist.findIndex((item) => item.id === id);
    if (index === -1) return null;
    const [removed] = this.blacklist.splice(index, 1);
    return removed;
  }
}
