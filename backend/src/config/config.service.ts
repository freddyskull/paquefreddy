import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigDto } from './dto/configDto';

@Injectable()
export class ConfigService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    const dato = await this.prisma.config.findFirst({
      where: { id: 1 },
    });
    return dato;
  }

  async update(dto: any) {
    const config = await this.findAll();
    const updatedConfig = await this.prisma.config.update({
      where: { id: 1 },
      data: { ...config, ...dto },
    });
    return {
      status: 'ok',
      message: 'configuración actualizada',
      data: updatedConfig,
    };
  }
}
