import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  Put
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategorieDto } from './dto/categories.dto';
import { ConfigService } from 'src/config/config.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly config: ConfigService
  ) {}

  private async formatCategorie(categorie: any): Promise<any> {
    if (!categorie) {
      throw new Error('Categorie not found');
    }

    const config = await this.config.findAll();
    const dolarPrice = config?.dolar || 1;
    return {
      ...categorie,
      products: Array.isArray(categorie.products)
        ? categorie.products.map((product: any) => ({
            ...product,
            dolarPrice: parseFloat((dolarPrice * product.price).toFixed(2)),
            categorie: undefined,
            categorie_id: undefined,
            supplier: {
              ...product.supplier,
              createdAt: undefined,
              updatedAt: undefined
            }
            // createdAt: new Date(product.createdAt).toLocaleDateString(),
            // updatedAt: new Date(product.updatedAt).toLocaleDateString(),
            // expiration: new Date(product.expiration).toLocaleDateString()
          }))
        : []
      // createdAt: new Date(categorie.createdAt).toLocaleDateString(),
      // updatedAt: new Date(categorie.updatedAt).toLocaleDateString()
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCategoryDto: CategorieDto) {
    const categorie = await this.categoriesService.create(createCategoryDto);
    const allCategories = await this.categoriesService.findAll();
    
    return {
      data: await Promise.all(allCategories.map(c => this.formatCategorie(c))),
      categorie: await this.formatCategorie(categorie)
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async index() {
    const categorie = await this.categoriesService.findAll();
    return await Promise.all(
      categorie.map((categorie) => this.formatCategorie(categorie))
    );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: any) {
    const categorie = await this.categoriesService.findOne(parseInt(id));
    return await this.formatCategorie(categorie);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateCategoryDto: CategorieDto) {
    const categorie = await this.categoriesService.update(id, updateCategoryDto);
    return await this.formatCategorie(categorie);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: number) {
    return this.categoriesService.remove(id);
  }
}
