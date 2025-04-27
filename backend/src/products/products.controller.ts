import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';
import { productDto } from './dto/product.dto';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  private formatProductDates(product: any) {
    return {
      ...product,
      categorie: {
        ...product.categorie,
        createdAt: undefined,
        updatedAt: undefined,
      },
      supplier: {
        ...product.supplier,
        createdAt: undefined,
        updatedAt: undefined,
      },
      createdAt: new Date(product.createdAt).toLocaleDateString(),
      updatedAt: new Date(product.updatedAt).toLocaleDateString(),
      expiration: new Date(product.expiration).toLocaleDateString(),
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ValidationPipe()) dto: productDto) {
    return this.productsService.create(dto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() params: any) {
    const product = await this.productsService.findOne(parseInt(params.id));
    return this.formatProductDates(product);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async index() {
    const products = await this.productsService.findAll();
    return products.map(this.formatProductDates);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param() params: any, @Body(new ValidationPipe()) dto: productDto) {
    return this.productsService.update(parseInt(params.id), dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: any) {
    return this.productsService.remove(parseInt(id));
  }
}
