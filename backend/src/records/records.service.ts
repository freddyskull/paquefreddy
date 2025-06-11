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
    await this.prisma.records.create({
      select: this.formatedData,
      data: { ...dto, dolar_price: dolar }
    });
    return {
      status: 'ok',
      title: 'Venta realizada',
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

  findOne(id: number) {
    return `This action returns a #${id} record`;
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
}
