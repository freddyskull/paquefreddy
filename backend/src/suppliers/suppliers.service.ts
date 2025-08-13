import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SupplierDto } from './dto/suppliers.dto';

@Injectable()
export class SuppliersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  private formatedData = {
    id: true,
    name: true,
    credit_days: true,
    company: true,
    email: true,
    address: true,
    city: true,
    state: true,
    country: true,
    zip: true,
    phone: true,
    createdAt: true,
    updatedAt: true
  };

  async supplierExists(
    field: keyof SupplierDto,
    value: any,
    excludeId?: number
  ): Promise<void> {
    const where: any = {
      [field]: value
    };

    if (excludeId) {
      where.NOT = {
        id: excludeId
      };
    }

    const supplier = await this.prisma.suppliers.findFirst({
      where
    });

    if (supplier) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'El proveedor ya existe'
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }


  async create(dto: SupplierDto) {
    await this.supplierExists('name', dto.name);

    try {
      const supplier = await this.prisma.suppliers.create({
        data: {
          name: dto.name,
          credit_days: dto.credit_days || 0,
          company: dto.company || null,
          email: dto.email || null,
          address: dto.address || null,
          city: dto.city || null,
          state: dto.state || null,
          country: dto.country || null,
          zip: dto.zip || null,
          phone: dto.phone || null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        select: this.formatedData
      });

      return supplier;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error al crear el proveedor',
          error: error.message
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.suppliers.findMany({
        select: this.formatedData,
        orderBy: {
          name: 'asc'
        }
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error al obtener los proveedores',
          error: error.message
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: number) {
    try {
      const supplier = await this.prisma.suppliers.findUnique({
        where: { id },
        select: this.formatedData
      });

      if (!supplier) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            message: 'Proveedor no encontrado'
          },
          HttpStatus.NOT_FOUND
        );
      }

      return supplier;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error al obtener el proveedor',
          error: error.message
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(id: number, dto: SupplierDto) {
    await this.supplierExists('name', dto.name, id);

    try {
      const supplier = await this.prisma.suppliers.update({
        where: { id },
        data: {
          name: dto.name,
          credit_days: dto.credit_days || 0,
          company: dto.company || null,
          email: dto.email || null,
          address: dto.address || null,
          city: dto.city || null,
          state: dto.state || null,
          country: dto.country || null,
          zip: dto.zip || null,
          phone: dto.phone || null
        },
        select: this.formatedData
      });

      return supplier;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            message: 'Proveedor no encontrado'
          },
          HttpStatus.NOT_FOUND
        );
      }
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error al actualizar el proveedor',
          error: error.message
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }


  async remove(id: number) {
    try {
      // Verificar si el proveedor tiene productos asociados
      const products = await this.prisma.products.findMany({
        where: { supplier_id: id },
        take: 1
      });

      if (products.length > 0) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            message: 'No se puede eliminar el proveedor porque tiene productos asociados'
          },
          HttpStatus.BAD_REQUEST
        );
      }

      await this.prisma.suppliers.delete({
        where: { id }
      });

      return { message: 'Proveedor eliminado correctamente' };
    } catch (error) {
      if (error instanceof HttpException) throw error;
      
      if (error.code === 'P2025') {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            message: 'Proveedor no encontrado'
          },
          HttpStatus.NOT_FOUND
        );
      }
      
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error al eliminar el proveedor',
          error: error.message
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
