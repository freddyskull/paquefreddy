import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { PrismaClient, black_list } from '@prisma/client';

@Controller('black-list')
export class BlackListController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  @Post()
  async create(@Body() createBlackListDto: any): Promise<black_list> {
    return this.prisma.black_list.create({ data: createBlackListDto });
  }

  @Get()
  async findAll(): Promise<black_list[]> {
    return this.prisma.black_list.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<black_list | null> {
    return this.prisma.black_list.findUnique({ where: { id: Number(id) } });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBlackListDto: any
  ): Promise<black_list> {
    return this.prisma.black_list.update({
      where: { id: Number(id) },
      data: updateBlackListDto
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<black_list> {
    return this.prisma.black_list.delete({ where: { id: Number(id) } });
  }
}
