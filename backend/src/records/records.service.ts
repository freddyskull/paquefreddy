import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { recordsDto } from './dto/record.dto';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from 'src/config/config.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class RecordsService {
  private prisma: PrismaClient;

  constructor(
    private readonly configService: ConfigService,
    private productServices: ProductsService
  ) {
    this.prisma = new PrismaClient();
  }

  private formatedData = {
    id: true,
    productList: true,
    dolar_price: true,
    status: true,
    totals: true,
    user_id: true,
    black_list_user_id: true,
    createdAt: true,
    updatedAt: true
  };

  async recordExists(
    field: keyof recordsDto,
    value: any,
    message: string = 'Intentas duplicar una venta, por favor verifica la venta'
  ): Promise<void> {
    const record = await this.prisma.records.findFirst({
      where: {
        [field]: value
      }
    });
    if (record) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async create(dto: recordsDto) {
    const config = await this.configService.findAll();
    const dolar = config?.dolar || 0;

    for (const item of dto.productList) {
      const product = await this.productServices.findOne(item.id);
      if (!product) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            message: `Producto con ID ${item.id} no encontrado`
          },
          HttpStatus.NOT_FOUND
        );
      }
      if (product.stock < item.quantity) {
        throw new HttpException(
          {
            status: 'ERROR',
            title: 'Falta de stock',
            message: `No se realizó la venta, el 'stock' es insuficiente para el producto '${product.name || product.id}'.`
          },
          HttpStatus.BAD_REQUEST
        );
      }
    }

    // Si todos los productos tienen stock suficiente, restar el stock
    for (const item of dto.productList) {
      await this.productServices.updateStock(item.id, item.quantity);
    }
    // FIXED: hacer que de un mensaje diferente si hay una persona de la blackList
    const createdRecord = await this.prisma.records.create({
      select: this.formatedData,
      data: { ...dto, dolar_price: dolar }
    });
    return {
      status: 'ok',
      title: 'Venta realizada',
      data: dto,
      id: createdRecord.id,
      message: 'La lista de productos fué descontada de el stock de productos.'
    };
  }

  findAll() {
    return this.prisma.records.findMany({
      select: this.formatedData,
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async findOne(id: number) {
    if (!id) {
      throw new HttpException(
        'El ID de la venta es requerido',
        HttpStatus.BAD_REQUEST
      );
    }
    return this.prisma.records
      .findFirst({
        where: { id: Number(id) },
        select: this.formatedData
      })
      .then((record) => {
        if (!record) {
          throw new HttpException(
            'No existe la venta con el ID ' + id,
            HttpStatus.BAD_REQUEST
          );
        }
        return record;
      });
  }

  update(id: number, updateRecordDto: recordsDto) {
    return `This action updates a #${id} record`;
  }

  async remove(id: number) {
    const record = await this.prisma.records.findFirst({
      where: { id: Number(id) }
    });
    if (!record) {
      throw new HttpException(
        'No existe la venta con el ID ' + id,
        HttpStatus.BAD_REQUEST
      );
    }
    await this.prisma.records.delete({
      where: { id },
      select: this.formatedData
    });
    const data = await this.findAll();
    return {
      status: 'ok',
      title: 'Registro eliminado',
      message: `El registro con ID ${id} ha sido eliminado correctamente.`,
      data
    };
  }

  async findByDateRange(startDate: Date, endDate: Date) {
    const records = await this.prisma.records.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      },
      select: this.formatedData,
      orderBy: {
        createdAt: 'desc'
      }
    });
    const count = await this.prisma.records.count({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      }
    });

    // Sumar los totals (parseando si es string)

    const isObject = (val: any) =>
      val && typeof val === 'object' && !Array.isArray(val);
    const totals = records.reduce(
      (acc, item) => {
        let t: any = item.totals;
        if (typeof t === 'string') {
          try {
            t = JSON.parse(t);
          } catch {
            t = {};
          }
        }
        if (t && isObject(t)) {
          acc.totalBs += Number((t as any).totalBs) || 0;
          acc.totalDolar += Number((t as any).totalDolar) || 0;
          if ((t as any).totalProfits && isObject((t as any).totalProfits)) {
            acc.totalProfits.bs += Number((t as any).totalProfits.bs) || 0;
            acc.totalProfits.usd += Number((t as any).totalProfits.usd) || 0;
          }
        }
        return acc;
      },
      { totalBs: 0, totalDolar: 0, totalProfits: { bs: 0, usd: 0 } }
    );

    return { count, records, totals, 'date-range': { startDate, endDate } };
  }
}
