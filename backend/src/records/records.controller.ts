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
