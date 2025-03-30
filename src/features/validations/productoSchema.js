import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(3, 'Nombre es obligatorio'),
  stock: z.number({ invalid_type_error: 'La cantidad es obligatoria' }).min(0, 'La cantidad debe ser al menos 0'),
  categorie_clt: z.string(),
  image: z.string().url('Debe ser una URL válida').optional(),
  price_ent: z.number({ invalid_type_error: 'El precio de entrada es obligatorio' }).min(0, 'El precio de entrada debe ser al menos 0'),
  price: z.number({ invalid_type_error: 'El precio es obligatorio' }).min(0, 'El precio debe ser al menos 0'),
  bundle: z.number().min(0, 'La cantidad por caja debe ser al menos 0'),
  brand: z.string().nullable().optional()
}).refine(data => data.price > data.price_ent, {
  message: 'El precio debe ser mayor que el precio de entrada',
  path: ['price'] // Esto especifica dónde se mostrará el error
})
