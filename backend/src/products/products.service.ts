import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { productDto } from './dto/product.dto';
import slugify from 'slugify';
@Injectable()
export class ProductsService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  private buildProductData(dto: productDto) {
    return {
      name: dto.name,
      stock: dto.stock,
      status: dto.status,
      price: parseFloat(dto.price.toString()),
      price_ent: parseFloat(dto.price_ent.toString()),
      slugs: dto.slugs,
      slugs_url: slugify(dto.name),
      images: dto.images,
      brand: dto.brand,
      bundle: dto.bundle,
      expiration: dto.expiration,
      unity: dto.unity,
      supplier_id: dto.supplier_id,
      category_id: dto.category_id,
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
    updatedAt: true,
  };

  async productExists(
    field: keyof productDto,
    value: any,
    message: string = 'Intentas duplicar un producto, por favor verifica el nombre',
  ): Promise<void> {
    const product = await this.prisma.products.findFirst({
      where: {
        [field]: value,
      },
    });
    if (product) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async create(dto: productDto) {
    await this.productExists('name', dto.name);
    await this.prisma.products.create({
      data: this.buildProductData(dto),
    });
    return { status: 'ok', message: 'Producto creado correctamente' };
  }

  findAll() {
    return this.prisma.products.findMany({
      select: this.formatedData,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const dato = await this.prisma.products.findFirst({
      where: { id: Number(id) },
    });

    if (!dato) {
      throw new HttpException('No existe el producto', HttpStatus.BAD_REQUEST);
    }

    return dato;
  }

  async update(id: any, dto: productDto) {
    await this.productExists('name', dto.name);
    await this.prisma.products.update({
      where: {
        id: Number(id),
      },
      data: this.buildProductData(dto),
    });
    return { status: 'ok', message: 'Producto actualizado correctamente' };
  }

  async remove(id: any) {
    const product = await this.prisma.products.findFirst({
      where: { id: Number(id) },
    });
    if (!product) {
      throw new HttpException('No existe el producto', HttpStatus.BAD_REQUEST);
    }
    await this.prisma.products.delete({
      where: {
        id: Number(id),
      },
    });
    return { status: 'ok', message: 'Producto eliminado correctamente' };
  }
}
