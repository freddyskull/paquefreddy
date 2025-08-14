import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from './config/config.module';
import { CategoriesModule } from './categories/categories.module';
import { RecordsModule } from './records/records.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { BlacklistModule } from './blacklist/blacklist.module';
import { PrimasService } from './primas/primas.service';

@Module({
  imports: [
    ProductsModule,
    ConfigModule,
    CategoriesModule,
    RecordsModule
    // SuppliersModule,
    // BlacklistModule
  ],
  controllers: [],
  providers: [PrimasService]
})
export class AppModule {}
