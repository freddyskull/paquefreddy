import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';
import { ConfigService } from 'src/config/config.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  controllers: [RecordsController],
  providers: [RecordsService, ConfigService, ProductsService]
})
export class RecordsModule {}
