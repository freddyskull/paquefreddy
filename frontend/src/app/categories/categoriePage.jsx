import React from 'react'
import Layout from '../layout'
import { Card, CardContent } from '@/components/ui/card'
import { useCategoriesStore } from '@/store/categoriesStore'
import { Toaster } from '@/components/ui/sonner'
import { DefaultDatatable } from '@/components/dataTable/default/defaultDatatable'
import { Link } from 'react-router-dom'


export const CategoriePage = () => {
  const { categories, isLoading } = useCategoriesStore()
  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
      center: true,
      cell: ({ row }) => (
        <div className='text-center'>
          <button
            className="bg-slate-300 hover:bg-slate-400 px-3 py-1 rounded-md font-bold text-slate-500 text-xs text-center transition"
            type="button"
          >
            {row.original.id}
          </button>
        </div>
      )
    },
    {
      accessorKey: 'name',
      header: () => <div>Nombre</div>,
      cell: ({ row }) => (
        <h4 className="gap-2 font-bold text-md uppercase">
          {row.original.name}
        </h4>
      ),
    },
    {
      accessorKey: 'slug_url',
      header: () => <div>URL de categoría</div>,
      cell: ({ row }) => (
        <Link to={`/productos/categoria?${row.original.slug_url}`} className="gap-2 font-bold text-blue-400 text-xs uppercase cursor-pointer">
          {row.original.slug_url ? row.original.slug_url : 'N/A'}
        </Link>
      ),
    },
    {
      accessorKey: 'productsCount',
      header: () => <div>Cantidad de productos</div>,
      center: true,
      cell: ({ row }) => (
        <div className='text-center'>
          <button
            className="bg-slate-300 hover:bg-slate-400 px-3 py-1 rounded-md font-bold text-slate-500 text-xs text-center transition"
            type="button"
          >
            {row.original.productsCount || 0}
          </button>
        </div>
      ),
    },
    // {
    //   accessorKey: 'createdAt',
    //   center: true,
    //   header: () => <div className="text-center">Fecha</div>,
    //   cell: ({ row }) => {
    //     if (row.original.createdAt) {
    //       const dateObj = new Date(row.original.createdAt)
    //       const dateStr = dateObj.toLocaleDateString('es-VE', {
    //         year: '2-digit',
    //         month: '2-digit',
    //         day: '2-digit',
    //       })
    //       const timeStr = dateObj.toLocaleTimeString('es-VE', {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //       })
    //       return (
    //         <span className="flex justify-center items-center font-bold text-center">
    //           {`${dateStr} - ${timeStr}`}
    //         </span>
    //       )
    //     }
    //     return (
    //       <span className="flex justify-center items-center font-bold text-center">
    //         N/A
    //       </span>
    //     )
    //   },
    // },
  ]


  return (
    <Layout>
      <Card className="w-full">
        <CardContent>
          {
            isLoading ? (
              <div className="text-center">Cargando categorías...</div>
            ) : (
              <DefaultDatatable
                columns={columns}
                data={categories}
              />
            )
          }

        </CardContent>
      </Card>
    </Layout>
  )
}

