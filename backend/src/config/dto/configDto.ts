import { ApiProperty } from '@nestjs/swagger';
import { IsCurrency, IsNotEmpty, IsNumber } from 'class-validator';

export class ConfigDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El precio de entrada es requerido' })
  @IsCurrency(
    {},
    {
      message:
        "El precio de entrada debe ser un valor monetario válido y contener '.' decimales",
    },
  )
  dolar: Number;

  @ApiProperty()
  useIva: Boolean;

  @ApiProperty()
  autoPrice: Boolean;

  @ApiProperty()
  @IsNumber({}, { message: 'EL margen de ganancia debe ser valido' })
  profit: Number;

  @ApiProperty()
  roundPrice: Boolean;

  @ApiProperty()
  @IsNotEmpty({
    message: 'El campo de categorías predeterminadas es requerido',
  })
  default_categories_id: Number;

  @ApiProperty()
  threshold: Number;

  @ApiProperty()
  defafult_currency: String;

  @ApiProperty()
  expiration_default: Date;

  @ApiProperty()
  bundle_discount: Number;
}
