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

  private convertEmptyStringToNull<T>(value: T): T | null {
    if (typeof value === 'string' && value.trim() === '') {
      return null;
    }
    return value;
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
      expiration: dto.expiration ? dto.expiration : null,
      unity: dto.unity?.trim() === '' ? null : dto.unity,
      supplier_id: dto.supplier_id,
      categorie_id: dto.categorie_id,
      price: dto.price ? parseFloat(dto.price) : undefined,
      price_ent: dto.price_ent ? parseFloat(dto.price_ent) : undefined
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

  private convertPricesToUSD(dto: productDto, dolar: number, request?: any): productDto {
    const keys = Object.keys(dto);
    const hasPrice = keys.includes('price') || keys.includes('price_ent');
    if (!hasPrice) return dto;
    Object.keys(request).forEach(key => {
      if (key === 'price' || key === 'price_ent') {
        dto[key] = (parseFloat(request[key]) / dolar).toFixed(2);
      }
    });
    
    return dto;
    
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
    
    
    const keys = Object.keys(dto)
    const hasPrice = keys.includes('price') || keys.includes('price_ent');
    
    //FIXED: tengo un problema con el precio debo arreglarlo
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
