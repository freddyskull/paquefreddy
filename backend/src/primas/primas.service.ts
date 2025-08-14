import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrimasService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect();
    } catch (err: any) {
      console.error('[DB] Error al conectar a la base de datos:', err?.message || err);
      // Rethrow to let NestJS fail the bootstrap with a clear error
      throw err;
    }
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
