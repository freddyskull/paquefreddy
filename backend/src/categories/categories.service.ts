import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CategorieDto } from './dto/categories.dto';
import slugify from 'slugify';

@Injectable()
export class CategoriesService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  private formatedData = {
    id: true,
    name: true,
    slug_url: true,
    createdAt: true,
    updatedAt: true
  };

  async categoryExists(
    field: keyof CategorieDto,
    value: any,
    message: string = 'Intentas duplicar una categoría, por favor verifica el nombre'
  ): Promise<void> {
    const category = await this.prisma.categories.findFirst({
      where: {
        OR: [{ name: value }, { slug_url: value }]
      }
    });
    if (category) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message:
            field === 'name'
              ? 'El nombre de la categoría ya existe'
              : 'La URL amigable ya está en uso'
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async create(dto: CategorieDto) {
    await this.categoryExists('name', dto.name);

    await this.prisma.categories.create({
      data: {
        name: dto.name,
        slug_url: slugify(dto.name, {
          lower: true
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    return { status: 'ok', message: 'Categoría creada correctamente' };
  }

  findAll() {
    return this.prisma.categories.findMany({
      select: this.formatedData,
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async findOne(id: number) {
    const category = await this.prisma.categories.findFirst({
      where: { id: Number(id) },
      select: this.formatedData
    });

    if (!category) {
      throw new HttpException('No existe la categoría', HttpStatus.BAD_REQUEST);
    }
    return category;
  }

  async update(id: number, dto: CategorieDto) {
    const category = await this.prisma.categories.findFirst({
      where: { id: Number(id) }
    });
    if (!category) {
      throw new HttpException('No existe la categoría', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.categories.update({
      where: {
        id: Number(id)
      },
      data: {
        name: dto.name
      }
    });

    return { status: 'ok', message: 'Categoría actualizada correctamente' };
  }

  async remove(id: number) {
    const category = await this.prisma.categories.findFirst({
      where: { id: Number(id) }
    });
    if (!category) {
      throw new HttpException('No existe la categoría', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.categories.delete({
      where: {
        id: Number(id)
      }
    });

    return { status: 'ok', message: 'Categoría eliminada correctamente' };
  }
}
