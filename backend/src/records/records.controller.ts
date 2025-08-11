import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ValidationPipe,
  Query
} from '@nestjs/common';
import { RecordsService } from './records.service';
import { ApiTags } from '@nestjs/swagger';
import { recordsDto } from './dto/record.dto';

@Controller('records')
@ApiTags('Records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ValidationPipe()) dto: recordsDto) {
    return this.recordsService.create(dto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.recordsService.findAll();
  }

  @Get('date-range')
  async findByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string
  ) {
    return this.recordsService.findByDateRange(
      new Date(startDate),
      new Date(endDate)
    );
  }

  @Get('sales-stats')
  async sellingProductsByThresholds(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Query('lowThreshold') lowThreshold: string,
    @Query('highThreshold') highThreshold: string,
    @Query('limit') limit: string,
    @Query('page') page: string
  ) {
    return this.recordsService.sellingProductsByThresholds(
      new Date(startDate),
      new Date(endDate),
      Number(lowThreshold),
      Number(highThreshold),
      limit === 'all' ? 'all' : Number(limit),
      Number(page)
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: recordsDto) {
    return this.recordsService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(+id);
  }
}
