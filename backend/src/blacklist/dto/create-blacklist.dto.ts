import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
export class CreateBlacklistDto {
  @ApiProperty({
    description: 'Campo para determinar el nombre del producto',
    default: false
  })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre no puede exceder los 100 caracteres' })
  name: string;

  @ApiProperty({
    description: 'Campo para describir a la persona',
    default: false
  })
  @IsOptional({ message: 'La descripción es opcional' })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @MaxLength(255, {
    message: 'La descripción no puede exceder los 255 caracteres'
  })
  description: string;

  @ApiProperty({
    description: 'Campo para determinar el total que debe pagar el cliente',
    default: 0
  })
  @IsOptional({ message: 'El total es opcional' })
  total: number;

  @ApiProperty({
    description: 'Campo para determinar el descuento aplicado al cliente',
    default: 0.0
  })
  @IsOptional({ message: 'El descuento es opcional' })
  discount: number;

  @ApiProperty({
    description: 'Campo para determinar el número de teléfono del cliente',
    default: ''
  })
  @IsOptional({ message: 'El teléfono es opcional' })
  @IsString({ message: 'El teléfono debe ser una cadena de texto' })
  phone: string;

  @ApiProperty({
    description: 'Campo para determinar el correo electrónico del cliente',
    default: ''
  })
  @IsOptional({ message: 'El correo electrónico es opcional' })
  @IsString({ message: 'El correo electrónico debe ser una cadena de texto' })
  email: string;

  @ApiProperty({
    description: 'Campo para determinar la dirección del cliente',
    default: ''
  })
  @IsOptional({ message: 'La dirección es opcional' })
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  address: string;

  @ApiProperty({
    description: 'Campo para determinar la ciudad del cliente',
    default: ''
  })
  @IsOptional({ message: 'La ciudad es opcional' })
  @IsString({ message: 'La ciudad debe ser una cadena de texto' })
  city: string;

  // @ApiProperty({
  //   description: 'Campo para determinar los productos',
  //   default: []
  // })
  // Records: any[];
}
