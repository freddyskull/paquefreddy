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
  Patch
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';
import { productDto } from './dto/product.dto';
import { ConfigService } from '../config/config.service';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private readonly config: ConfigService
  ) {}

  private async formatProductDates(product: any): Promise<any> {
    const config = await this.config.findAll();
    const dolarPrice = config?.dolar || 1;
    return {
      ...product,
      price_bs: parseFloat((dolarPrice * product.price).toFixed(2)),
      price_ent_bs: parseFloat((dolarPrice * product.price_ent).toFixed(2)),
      categorie: {
        ...product.categorie,
        createdAt: undefined,
        updatedAt: undefined
      },
      supplier: {
        ...product.supplier,
        createdAt: undefined,
        updatedAt: undefined
      }
      // createdAt: new Date(product.createdAt).toLocaleDateString(),
      // updatedAt: new Date(product.updatedAt).toLocaleDateString(),
      // expiration: new Date(product.expiration).toLocaleDateString()
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ValidationPipe()) dto: productDto) {
    const product = await this.productsService.create(dto);
    const allProducts = await this.productsService.findAll();
    return {
      data: await Promise.all(allProducts.map(p => this.formatProductDates(p))),
      product: await this.formatProductDates(product)
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() params: any) {
    const product = await this.productsService.findOne(params.id);
    return await this.formatProductDates(product);
  }

  @Get('search/:query')
  @HttpCode(HttpStatus.OK)
  async search(@Param('query') query: string) {
    const products = await this.productsService.searchProduct(query);
    return await Promise.all(
      products.map((product) => this.formatProductDates(product))
    );
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async index() {
    const products = await this.productsService.findAll();
    return await Promise.all(
      products.map((product) => this.formatProductDates(product))
    );
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

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async patchProduct(@Param('id') id: number, @Body() dto: productDto) {
    const patch = await this.productsService.patch(id, dto);
    const response = {
      ...patch,
      data: await this.formatProductDates(patch.data)
    };
    return response;
  }
}
