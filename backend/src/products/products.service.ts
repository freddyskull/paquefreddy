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
      slug_url: slugify(dto.name),
      image: dto.image?.trim() === '' ? null : dto.image,
      brand: dto.brand?.trim() === '' ? null : dto.brand,
      bundle: dto.bundle === 0 ? null : dto.bundle,
      expiration:
        dto.expiration === ''
          ? null
          : dto.expiration
            ? new Date(dto.expiration)
            : null,
      unity: dto.unity?.trim() === '' ? null : dto.unity,
      sell_unity: dto.sell_unity,
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
    slug_url: true,
    image: true,
    brand: true,
    bundle: true,
    categorie_id: true,
    sell_unity: true,
    expiration: true,
    unity: true,
    categories: true,
    suppliers: true,
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
    // Validar que el slug_url sea único
    // Generar slug eliminando paréntesis, comillas y caracteres especiales
    const slugUrl = slugify(
      dto.name.replace(/[()"'`´!¡¿?.,:;[\]{}<>@#$%^&*+=~|\\/]/g, ''),
      { lower: true, strict: true }
    );
    await this.productExists(
      'slug_url',
      slugUrl,
      'La "URL del producto" ya existe, por favor elige otro nombre'
    );
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
      orderBy: [
        { createdAt: 'desc' }, // más nuevos primero
        { updatedAt: 'desc' } // luego los más actualizados
      ]
    });
  }

  async findOne(id: any) {
    if (isNaN(Number(id))) {
      const product = await this.prisma.products.findFirst({
        where: { slug_url: id },
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
    // await this.productExists(
    //   'slug_url',
    //   dto.slug_url,
    //   'La "URL del producto" ya existe, por favor elige otro nombre'
    // );
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
    // await this.productExists(
    //   'slug_url',
    //   dto.slug_url,
    //   'La "URL del producto" ya existe, por favor elige otro nombre'
    // );
    if (dto.price_ent && dto.price) {
      this.validatePrices(dto.price_ent, dto.price);
    }
    const config = await this.configService.findAll();
    const dolar = config?.dolar || 0;
    const newData = { ...product, ...dto };

    // Si no se recibe currency, price ni price_bs, no modificar precios
    const shouldUpdatePrices =
      'currency' in dto ||
      'price' in dto ||
      'price_bs' in dto ||
      'price_ent' in dto;

    let updatedData;
    if (shouldUpdatePrices) {
      updatedData =
        dto.currency === 'USD' || !dto.currency
          ? this.buildProductData(newData)
          : this.buildProductData(this.convertPricesToUSD(newData, dolar, dto));
    } else {
      // No modificar precios
      const dtoObj = JSON.parse(JSON.stringify(dto));
      delete dtoObj.price;
      delete dtoObj.price_ent;
      delete dtoObj.price_bs;
      const merged = { ...product, ...dtoObj };
      updatedData = this.buildProductData(merged);
      // Mantener los precios originales
      updatedData.price = product.price;
      updatedData.price_ent = product.price_ent;
    }

    // Eliminar slug_url para no actualizarlo
    if ('slug_url' in updatedData) {
      delete updatedData.slug_url;
    }

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

  async updateStock(id: number, quantityChange: number) {
    const product = await this.findOne(id);
    const newStock = product.stock - quantityChange;
    if (newStock < 0) {
      throw new HttpException(
        'No hay suficiente stock disponible',
        HttpStatus.BAD_REQUEST
      );
    }

    // AQUI HACER COMO EL PATCH
    await this.prisma.products.update({
      where: { id: Number(id) },
      data: { stock: newStock }
    });

    return {
      status: 'ok',
      message: 'Stock actualizado correctamente',
      data: await this.findOne(id)
    };
  }

  async searchProduct(query: string) {
    if (!query || query.trim() === '') {
      throw new HttpException(
        'La consulta de búsqueda no puede estar vacía',
        HttpStatus.BAD_REQUEST
      );
    }
    query = query.trim();
    if (query.length < 2) {
      throw new HttpException(
        'La consulta de búsqueda debe tener al menos 2 caracteres',
        HttpStatus.BAD_REQUEST
      );
    }

    return this.prisma.products.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { slugs: { has: query } },
          { brand: { contains: query, mode: 'insensitive' } }
        ]
      },
      select: this.formatedData,
      orderBy: [
        { createdAt: 'desc' }, // más nuevos primero
        { updatedAt: 'desc' } // luego los más actualizados
      ]
    });
  }

  async productsPagination(page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.prisma.products.findMany({
        skip,
        take: limit,
        select: this.formatedData,
        orderBy: { createdAt: 'desc' }
      }),
      this.prisma.products.count()
    ]);
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit)
    };
  }
}
