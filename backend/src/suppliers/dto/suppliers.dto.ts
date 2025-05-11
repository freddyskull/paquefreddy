import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class SupplierDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre no puede exceder los 100 caracteres' })
  name: string;

  @ApiProperty({ required: false })
  @IsNumber({}, { message: 'Los días de crédito deben ser un número' })
  @IsOptional()
  credit_days?: number;

  @ApiProperty({ required: false })
  @IsString({ message: 'La empresa debe ser una cadena de texto' })
  @IsOptional()
  company?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'El correo electrónico debe ser una cadena de texto' })
  @IsOptional()
  email?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  @IsOptional()
  address?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'La ciudad debe ser una cadena de texto' })
  @IsOptional()
  city?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'El estado debe ser una cadena de texto' })
  @IsOptional()
  state?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'El país debe ser una cadena de texto' })
  @IsOptional()
  country?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'El código postal debe ser una cadena de texto' })
  @IsOptional()
  zip?: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'El teléfono debe ser una cadena de texto' })
  @IsOptional()
  phone?: string;
}
