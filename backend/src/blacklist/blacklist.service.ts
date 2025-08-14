import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  private formatedData = {
    id: true,
    name: true,
    description: true,
    total: true,
    createdAt: true,
    updatedAt: true,
    address: true,
    city: true,
    email: true,
    phone: true,
    records: true
  };

  // async create(dto: CreateBlacklistDto) {
  //   await this.prisma.black_list.create({
  //     data: {
  //       ...dto,
  //     }
  //   });

  //   return { status: 'ok', message: 'Categoría creada correctamente' };
  // }

  async create(dto: CreateBlacklistDto) {
    const blacklisted = await this.prisma.black_list.findFirst({
      where: {
        name: dto.name,
      },
    });

    if (blacklisted)
      throw new HttpException(
        {
          status: 'error',
          message: 'Este usuario ya se encuentra en la lista negra',
        },
        HttpStatus.BAD_REQUEST,
      );

    await this.prisma.black_list.create({
      data: {
        ...dto
      },
    });

    return { status: 'ok', message: 'Usuario agregado a la lista negra' };
  }


  async findAll(): Promise<Blacklist[]> {
    return this.prisma.black_list.findMany({
      select: this.formatedData,
      orderBy: {
        createdAt: 'desc'
      }
    });
  }


  async findOne(id: number): Promise<Blacklist> {
    const blacklisted = await this.prisma.black_list.findFirst({
      where: {
        id: id,
      },
    });

    if (!blacklisted)
      throw new HttpException(
        {
          status: 'error',
          message: 'Este usuario no se encuentra en la lista negra',
        },
        HttpStatus.BAD_REQUEST,
      );

    return blacklisted;
  }

  async update(id: number, updateBlacklistDto: UpdateBlacklistDto): Promise<Blacklist> {
    const blacklisted = await this.prisma.black_list.findFirst({
      where: {
        id: id,
      },
    });

    if (!blacklisted)
      throw new HttpException(
        {
          status: 'error',
          message: 'Este usuario no se encuentra en la lista negra',
        },
        HttpStatus.BAD_REQUEST,
      );

    return this.prisma.black_list.update({
      where: {
        id: id,
      },
      data: {
        ...updateBlacklistDto
      },
    });
  }

  async remove(id: number): Promise<Blacklist> {
    const blacklisted = await this.prisma.black_list.findFirst({
      where: {
        id: id,
      },
    });

    if (!blacklisted)
      throw new HttpException(
        {
          status: 'error',
          message: 'Este usuario no se encuentra en la lista negra',
        },
        HttpStatus.BAD_REQUEST,
      );

    return this.prisma.black_list.delete({
      where: {
        id: id,
      },
    });
  }
}
