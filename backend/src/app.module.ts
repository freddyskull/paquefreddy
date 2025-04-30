import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from './config/config.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ProductsModule, ConfigModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
