import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ApiTags } from '@nestjs/swagger';
import { ConfigDto } from './dto/configDto';

@Controller('config')
@ApiTags('Config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  index() {
    return this.configService.findAll();
  }

  @Patch()
  update(@Body() dto: ConfigDto) {
    return this.configService.update(dto);
  }
}
