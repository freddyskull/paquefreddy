import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsCurrency,
  IsBoolean,
  IsArray,
  IsString,
  IsDate,
  IsOptional,
  Min,
  MaxLength,
} from 'class-validator';

export class productDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre no puede exceder los 100 caracteres' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El stock es requerido' })
  @IsNumber({}, { message: 'El stock debe ser un número' })
  @Min(0, { message: 'El stock no puede ser negativo' })
  stock: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El estado es requerido' })
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  status: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'El precio de venta es requerido' })
  @IsCurrency(
    {},
    {
      message:
        "El precio de venta debe ser un valor monetario válido y contener '.' decimales",
    },
  )
  price: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El precio de entrada es requerido' })
  @IsCurrency(
    {},
    {
      message:
        "El precio de entrada debe ser un valor monetario válido y contener '.' decimales",
    },
  )
  price_ent: number;

  @ApiProperty()
  @IsArray({ message: 'Los slugs deben ser un arreglo de cadenas' })
  @IsString({ each: true, message: 'Cada slug debe ser una cadena de texto' })
  slugs: string[];

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Las imágenes deben ser una cadena de texto' })
  images: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'La marca debe ser una cadena de texto' })
  brand: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { message: 'El bundle debe ser un número' })
  @Min(0, { message: 'El bundle no puede ser negativo' })
  bundle: number;

  @ApiProperty()
  @IsOptional()
  @IsDate({ message: 'La fecha de expiración debe ser una fecha válida' })
  expiration: Date;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'La unidad debe ser una cadena de texto' })
  unity: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { message: 'El ID del proveedor debe ser un número' })
  supplier_id: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El ID de la categoría es requerido' })
  @IsNumber({}, { message: 'El ID de la categoría debe ser un número' })
  category_id: number;
}
