import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigDto } from './dto/configDto';

@Injectable()
export class ConfigService {
  getConfig(): any {
    throw new Error('Method not implemented.');
  }
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    const dato = await this.prisma.config.findFirst({
      where: { id: 1 }
    });
    return dato;
  }

  async patch(dto: any) {
    const config = await this.findAll();

    if (dto.dolar !== undefined) {
      dto.dolar = parseFloat(dto.dolar);
    }
    const updatedConfig = await this.prisma.config.update({
      where: { id: 1 },
      data: { ...config, ...dto }
    });
    return {
      status: 'ok',
      message: 'configuración actualizada',
      data: updatedConfig
    };
  }
}
