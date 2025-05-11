import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Query
} from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SupplierDto } from './dto/suppliers.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('suppliers')
@ApiTags('Suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo proveedor' })
  @ApiResponse({ status: 201, description: 'Proveedor creado correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async create(@Body() dto: SupplierDto) {
    return await this.suppliersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los proveedores' })
  @ApiResponse({ status: 200, description: 'Lista de proveedores obtenida correctamente' })
  async findAll() {
    return await this.suppliersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un proveedor por ID' })
  @ApiResponse({ status: 200, description: 'Proveedor encontrado' })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  async findOne(@Param('id') id: string) {
    return await this.suppliersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un proveedor' })
  @ApiResponse({ status: 200, description: 'Proveedor actualizado correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  async update(@Param('id') id: string, @Body() dto: SupplierDto) {
    return await this.suppliersService.update(+id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar un proveedor' })
  @ApiResponse({ status: 204, description: 'Proveedor eliminado correctamente' })
  @ApiResponse({ status: 400, description: 'No se puede eliminar el proveedor porque tiene productos asociados' })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado' })
  async remove(@Param('id') id: string) {
    return await this.suppliersService.remove(+id);
  }
}
