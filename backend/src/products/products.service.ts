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
    const productData = {
      name: dto.name,
      stock: dto.stock,
      status: dto.status,
      slugs: dto.slugs.length === 0 ? [] : dto.slugs,
      slugs_url: slugify(dto.name),
      image: dto.image?.trim() === '' ? null : dto.image,
      brand: dto.brand?.trim() === '' ? null : dto.brand,
      bundle: dto.bundle === 0 ? null : dto.bundle,
      expiration: dto.expiration ? new Date(dto.expiration) : null,
      unity: dto.unity?.trim() === '' ? null : dto.unity,
      supplier_id: dto.supplier_id,
      categorie_id: dto.categorie_id,
      price: dto.price ? Number(dto.price) : undefined,
      price_ent: dto.price_ent ? Number(dto.price_ent) : undefined
    };

    return productData as any;
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
    image: true,
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

  private convertPricesToUSD(
    dto: productDto,
    dolar: number,
    request?: any
  ): productDto {
    const result = { ...dto };
    const hasPrice = 'price' in dto || 'price_ent' in dto;

    if (!hasPrice || !dolar) return result;

    if (request?.price) {
      result.price = parseFloat(request.price) / dolar;
    }

    if (request?.price_ent) {
      result.price_ent = parseFloat(request.price_ent) / dolar;
    }

    return result;
  }

  private validatePrices(price_ent: number, price: number): void {
    if (price_ent >= price) {
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
        : this.buildProductData(this.convertPricesToUSD(dto, dolar, dto));
    await this.prisma.products.create({ data: productData });
    const product = await this.findOne(productData.id);
    return {
      status: 'ok',
      message: 'Producto creado correctamente',
      data: product
    };
  }

  findAll() {
    return this.prisma.products.findMany({
      select: this.formatedData,
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async findOne(id: any) {
    if (isNaN(Number(id))) {
      const product = await this.prisma.products.findFirst({
        where: { slugs_url: id },
        select: this.formatedData
      });

      if (!product) {
        throw new HttpException(
          'No existe el producto',
          HttpStatus.BAD_REQUEST
        );
      }
      return product;
    }
    const dato = await this.prisma.products.findFirst({
      where: { id: Number(id) },
      select: this.formatedData
    });

    if (!dato) {
      throw new HttpException('No existe el producto', HttpStatus.BAD_REQUEST);
    }
    return dato;
  }

  async update(id: string, dto: productDto) {
    const product = await this.findOne(id);
    const config = await this.configService.findAll();
    const dolar = config?.dolar || 0;
    this.validatePrices(dto.price_ent, dto.price);
    const newData = { ...product, ...dto };
    const updatedData =
      dto.currency === 'USD' || !dto.currency
        ? this.buildProductData(newData)
        : this.buildProductData(this.convertPricesToUSD(newData, dolar, dto));
    await this.prisma.products.update({
      where: { id: Number(id) },
      data: updatedData
    });
    const data = await this.findOne(id);
    return {
      status: 'ok',
      message: 'Producto actualizado correctamente',
      data: data
    };
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
        : this.buildProductData(this.convertPricesToUSD(newData, dolar, dto));

    await this.prisma.products.update({
      where: { id: Number(id) },
      data: updatedData
    });

    const data = await this.findOne(id);

    return {
      status: 'ok',
      message: 'Producto actualizado parcialmente',
      data: data
    };
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

  async searchProduct(query: string) {
    return this.prisma.products.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { slugs_url: { contains: query, mode: 'insensitive' } },
          { slugs: { has: query } }, // Adjusted to handle array of strings
          { brand: { contains: query, mode: 'insensitive' } }
        ]
      },
      select: this.formatedData,
      orderBy: {
        createdAt: 'desc'
      }
    });
  }
}
