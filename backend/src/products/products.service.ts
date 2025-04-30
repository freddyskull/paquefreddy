import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { productDto } from './dto/product.dto';
import slugify from 'slugify';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class ProductsService {
  private prisma: PrismaClient;

  constructor(private readonly configService: ConfigService) {
    this.prisma = new PrismaClient();
  }

  private buildProductData(dto: productDto) {
    return {
      name: dto.name,
      stock: dto.stock,
      status: dto.status,
      price: parseFloat(dto.price),
      price_ent: parseFloat(dto.price_ent),
      slugs: dto.slugs,
      slugs_url: slugify(dto.name),
      images: dto.images,
      brand: dto.brand,
      bundle: dto.bundle,
      expiration: dto.expiration,
      unity: dto.unity,
      supplier_id: dto.supplier_id,
      categorie_id: dto.categorie_id
    };
  }

  private formatedData = {
    id: true,
    name: true,
    stock: true,
    status: true,
    price: true,
    price_ent: true,
    slugs: true,
    slugs_url: true,
    images: true,
    brand: true,
    bundle: true,
    expiration: true,
    unity: true,
    categorie: true,
    supplier: true,
    createdAt: true,
    updatedAt: true
  };

  async productExists(
    field: keyof productDto,
    value: any,
    message: string = 'Intentas duplicar un producto, por favor verifica el nombre'
  ): Promise<void> {
    const product = await this.prisma.products.findFirst({
      where: {
        [field]: value
      }
    });
    if (product) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  private convertPricesToUSD(dto: productDto, dolar: number): productDto {
    return {
      ...dto,
      price_ent: (dto.price_ent / dolar).toFixed(2),
      price: (dto.price / dolar).toFixed(2)
    };
  }

  private validatePrices(price_ent: string, price: string): void {
    if (parseFloat(price_ent) >= parseFloat(price)) {
      throw new HttpException(
        'El precio de entrada no puede ser mayor o igual al de venta',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async create(dto: productDto) {
    this.validatePrices(dto.price_ent, dto.price);
    await this.productExists('name', dto.name);

    const config = await this.configService.findAll();
    const dolar = config?.dolar || 0;
    const productData =
      dto.currency === 'USD' || !dto.currency
        ? this.buildProductData(dto)
        : this.buildProductData(this.convertPricesToUSD(dto, dolar));

    await this.prisma.products.create({ data: productData });

    return { status: 'ok', message: 'Producto creado correctamente' };
  }

  findAll() {
    return this.prisma.products.findMany({
      select: this.formatedData,
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async findOne(id: number) {
    const dato = await this.prisma.products.findFirst({
      where: { id: Number(id) },
      select: this.formatedData
    });

    if (!dato) {
      throw new HttpException('No existe el producto', HttpStatus.BAD_REQUEST);
    }
    return dato;
  }

  async update(id: any, dto: productDto) {
    const product = await this.prisma.products.findFirst({
      where: { id: Number(id) }
    });
    if (!product) {
      throw new HttpException('No existe el producto', HttpStatus.BAD_REQUEST);
    }
    this.validatePrices(dto.price_ent, dto.price);

    const config = await this.configService.findAll();
    const dolar = config?.dolar || 0;
    const productData =
      dto.currency === 'USD' || !dto.currency
        ? this.buildProductData(dto)
        : this.buildProductData(this.convertPricesToUSD(dto, dolar));
    await this.prisma.products.update({
      where: {
        id: Number(id)
      },
      data: productData
    });
    return { status: 'ok', message: 'Producto actualizado correctamente' };
  }

  async patch(id: number, dto: productDto) {
    const product = await this.prisma.products.findFirst({
      where: { id: Number(id) }
    });
    if (!product) {
      throw new HttpException('No existe el producto', HttpStatus.BAD_REQUEST);
    }
    if (dto.price_ent && dto.price) {
      this.validatePrices(dto.price_ent, dto.price);
    }
    const config = await this.configService.findAll();
    const dolar = config?.dolar || 0;
    const newData = { ...product, ...dto };
    const updatedData =
      dto.currency === 'USD' || !dto.currency
        ? this.buildProductData(newData)
        : this.buildProductData(this.convertPricesToUSD(newData, dolar));

    await this.prisma.products.update({
      where: { id: Number(id) },
      data: updatedData
    });

    return { status: 'ok', message: 'Producto actualizado parcialmente' };
  }

  async remove(id: any) {
    const product = await this.prisma.products.findFirst({
      where: { id: Number(id) }
    });
    if (!product) {
      throw new HttpException('No existe el producto', HttpStatus.BAD_REQUEST);
    }
    await this.prisma.products.delete({
      where: {
        id: Number(id)
      }
    });
    return { status: 'ok', message: 'Producto eliminado correctamente' };
  }
}
