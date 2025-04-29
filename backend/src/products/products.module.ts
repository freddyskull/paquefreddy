import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ConfigService } from 'src/config/config.service';
import { ConfigController } from 'src/config/config.controller';

@Module({
  controllers: [ProductsController, ConfigController],
  providers: [ProductsService, ConfigService]
})
export class ProductsModule {}
