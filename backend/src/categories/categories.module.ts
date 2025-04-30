import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { ConfigService } from 'src/config/config.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ConfigService]
})
export class CategoriesModule {}
