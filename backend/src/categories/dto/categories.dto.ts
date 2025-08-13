import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CategorieDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre no puede exceder los 100 caracteres' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El slug es requerido' })
  @IsString({ message: 'El slug debe ser una cadena de texto' })
  slug_url: string;
}
