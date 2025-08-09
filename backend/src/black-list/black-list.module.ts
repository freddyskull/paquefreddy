import { Module } from '@nestjs/common';
import { BlackListController } from './black-list.controller';

@Module({
  controllers: [BlackListController],
  providers: []
})
export class BlackListModule {}
