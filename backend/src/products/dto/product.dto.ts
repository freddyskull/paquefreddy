import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsArray,
  IsString,
  IsOptional,
  Min,
  MaxLength,
  IsIn,
  Matches
} from 'class-validator';

export class productDto {
  @ApiProperty({
    description: 'Campo para determinar el nombre del producto',
    default: false
  })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre no puede exceder los 100 caracteres' })
  name: string;

  @ApiProperty({
    description: 'Campo para determinar la cantidad dentro del inventario',
    default: false
  })
  @IsNotEmpty({ message: 'El stock es requerido' })
  @IsNumber({}, { message: 'El stock debe ser un número' })
  @Min(0, { message: 'El stock no puede ser negativo' })
  stock: number;

  @ApiProperty({
    enum: [true, false],
    description:
      'Campo para determinar si el producto está activo o inactivo en la tienda',
    default: true
  })
  @IsNotEmpty({ message: 'El estado es requerido' })
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  status: boolean;

  @ApiProperty({
    description:
      'Campo para determinar el precio de venta del producto, se utiliza para calcular el margen de ganancia',
    default: 0
  })
  @IsNotEmpty({ message: 'El precio de venta es requerido' })
  @Min(0, { message: 'El precio de venta no puede ser negativo' })
  price: number;

  @ApiProperty({
    description:
      'Campo para determinar el precio en que se compró el producto, se utiliza para calcular el margen de ganancia'
  })
  @IsNotEmpty({ message: 'El precio de entrada es requerido' })
  price_ent: number;

  @ApiProperty({
    description:
      'Campo para facilitar la búsqueda del producto con palabras clave',
    default: false
  })
  @IsArray({ message: 'Los slugs deben ser un arreglo de cadenas' })
  @IsString({ each: true, message: 'Cada slug debe ser una cadena de texto' })
  slugs: string[];

  @ApiProperty({
    description: 'Campo para facilitar la búsqueda del producto en la app',
    default: false
  })
  @IsOptional()
  @IsString({
    message: 'El slug debe ser una cadena de texto y no debe tener espacios'
  })
  slug_url: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Las imágenes deben ser una cadena de texto' })
  image: string;

  @ApiProperty({
    description: 'Campo para determinar la marca del producto',
    default: false
  })
  @IsOptional()
  @IsString({ message: 'La marca debe ser una cadena de texto' })
  brand: string;

  @ApiProperty({
    description:
      'Campo para determinar que cantidad trae un paquete de este producto',
    default: 0
  })
  @IsOptional()
  @IsNumber({}, { message: 'El bundle debe ser un número' })
  @Min(0, { message: 'El bundle no puede ser negativo' })
  bundle: number;

  @ApiProperty({
    description:
      'Este campo hace referencia a la fecha de expiración del producto (formato: YYYY-MM-DD)',
    default: null,
    example: '2025-12-31'
  })
  @IsOptional()
  @IsString({ message: 'La fecha de expiración debe ser una cadena de texto' })
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'La fecha de expiración debe tener el formato YYYY-MM-DD'
  })
  expiration: string;

  @ApiProperty({
    description: 'Unidad de medida del producto',
    default: false
  })
  @IsOptional()
  @IsString({ message: 'La unidad debe ser una cadena de texto' })
  unity: string;

  @ApiProperty({
    description:
      'Campo para determinar si el producto se vende por el tipo de unidad',
    default: false
  })
  @IsOptional()
  @IsBoolean({ message: 'La unidad debe ser un valor booleano' })
  sell_unity: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { message: 'El ID del proveedor debe ser un número' })
  supplier_id: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El ID de la categoría es requerido' })
  @IsNumber({}, { message: 'El ID de la categoría debe ser un número' })
  categorie_id: number;

  @ApiProperty({
    description:
      'Campo para determinar la cantidad mínima de stock para alertar',
    default: 0
  })
  @IsOptional()
  @IsNumber({}, { message: 'La cantidad mínima de stock debe ser un número' })
  @Min(0, { message: 'La cantidad mínima de stock no puede ser negativa' })
  low_stock: number;

  @ApiProperty({
    enum: ['USD', 'BS'],
    description:
      'Este campo es opcional. Si no se proporciona, se asumirá que el valor por defecto es USD y sirve para hacer una transformación y guardar todos los productos en base a dolares.',
    default: 'USD'
  })
  @IsOptional()
  @IsString({ message: 'El campo debe ser una cadena de texto' })
  @IsIn(['USD', 'BS'], { message: 'El campo currency debe ser USD o BS' })
  currency?: string;
}
