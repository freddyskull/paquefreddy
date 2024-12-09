import { useEffect, useMemo } from 'react'
import { useProductsStore } from '../../features/productsStore'
import { ProductsSkeleton } from './skeleton/ProductsSkeleton'
import { DataTable } from '@/components/dataTable/dataTable'
import { Badge } from "@/components/ui/badge"
import 'tailwindcss/tailwind.css'
import { formatDistance, subDays } from "date-fns";
import { es } from 'date-fns/locale';
import { formatDistanceInDays } from '@/features/dateReturn'


export const ProductsPage = () => {
  const { getProducts, products } = useProductsStore()
  useEffect(() => {
    getProducts()
    
  }, [])

  console.log(products.items[0])
  const columns = useMemo( () => [ 
      { 
        accessorKey: 'image', 
        header: 'Imágen', 
        classname: 'text-center',
        enableFiltering: false,
        cell: (info) => <div className={`image`} style={{ backgroundImage: `url(${info.getValue()})`}}></div>,
      }, 
      { 
        accessorKey: 'created', 
        header: 'Fecha de creacion', 
        cell: (info) => (
          <Badge variant="outline" className='absolute -mt-36 bg-muted uppercase font-bold text-[10px] -ml-2'>
            {formatDistanceInDays(new Date(), info.getValue())}
          </Badge>

        ),
      }, 
      { accessorKey: 'name', header: 'Nombre del Producto', }, 
      { accessorKey: 'price', header: 'Precio', }, 
      { accessorKey: 'categorie_clt', header: 'Categoría', }, 
    ], []);




  return (
    <div>
      {
        products.load 
        ? <DataTable data={products.items} columns={columns} /> 
        : <ProductsSkeleton />
      }
    </div>
  )
}
