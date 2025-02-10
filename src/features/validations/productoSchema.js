import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(3, 'Nombre es obligatorio'),
  stock: z.number({ invalid_type_error: 'La cantidad es obligatoria' }).min(0, 'La cantidad debe ser al menos 0'),
  categorie_clt: z.string(),
  image: z.string().url('Debe ser una URL válida'),
  price_ent: z.string({ invalid_type_error: 'Campo obligatorio' }).refine((val) => {
    const number = parseFloat(val)
    return !isNaN(number) && number > 0
  }, {
    message: 'Debe ser un número mayor que 0'
  }),
  price: z.string({ invalid_type_error: 'No es string' }).refine((val) => {
    const number = parseFloat(val)
    return !isNaN(number) && number > 0
  }, {
    message: 'Debe ser un número mayor que 0'
  }),
  bundle: z.number().min(0, 'La cantidad por caja debe ser al menos 0'),
  brand: z.string().nullable().optional()
}).refine((data) => {
  const priceEnt = parseFloat(data.price_ent)
  const price = parseFloat(data.price)
  return price > priceEnt
}, {
  message: 'precio de venta debe ser mayor que precio entrada',
  path: ['price'] // Error mostrado en el campo `price`
})
