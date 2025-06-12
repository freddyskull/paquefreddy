import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class recordsDto {
  @ApiProperty({
    description: 'Lista de productos que se vendidos',
    example: [
      {
        id: 2,
        name: 'Oreo Mostrador 48Gr X 6 UNIDADES',
        stock: 2,
        status: false,
        price: 0.8,
        price_ent: 0.61,
        slugs: [],
        slugs_url: 'oreo-mostrador-48gr-x-6-unidades',
        image:
          'https://farmatina.com/wp-content/uploads/2025/05/Oreo-Chocolate-Mostrador-x-6-Unid-48Gr-595x595.jpg',
        brand: 'OREO',
        bundle: null,
        sell_unity: false,
        expiration: null,
        unity: null,
        categorie: {
          id: 1,
          name: 'Varios',
          slug_url: 'varios'
        },
        supplier: {},
        price_bs: 75.15,
        price_ent_bs: 57.3,
        categorie_slug: 'varios',
        quantity: 1
      }
    ]
  })
  @IsNotEmpty({
    message: 'PRODUCTLIST: El campo de lista de productos es requerido'
  })
  productList: any;

  @ApiProperty({
    description:
      'Estatus de la venta si pertenece a la lista negra y aún no está paga etonces estará activa',
    default: false
  })
  @IsBoolean({ message: 'STATUS: Este campo debe ser verdadero o falso' })
  @IsOptional()
  status: boolean;
  @ApiProperty({
    description: 'Total de todos los productos vendidos',
    example: { BS: 0, USD: 0 }
  })
  @IsNotEmpty({ message: 'TOTALS: El campo de totales es requerido' })
  totals: any;

  @ApiProperty({
    description: 'Se almacena el id del usuario que generó la venta'
  })
  user_id: string;
  @ApiProperty({
    description: 'Usuario dentro de la lista negra'
  })
  black_list_user_id: number;
  @ApiProperty({
    description: 'Fecha de creación'
  })
  @IsOptional()
  createdAt: Date;

  @ApiProperty({
    description: 'Indica si la venta se realizó sin stock',
    default: false
  })
  @IsBoolean({
    message: 'SELL_WITHOUT_STOCK: Este campo debe ser verdadero o falso'
  })
  @IsOptional()
  sell_without_stock: boolean;

  @ApiProperty({
    description: 'Fecha de actualización'
  })
  @IsOptional()
  updatedAt: Date;
}
