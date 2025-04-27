import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ProductsModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
