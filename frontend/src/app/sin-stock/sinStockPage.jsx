import React from 'react'
import Layout from '../layout'
import { useProductStore } from '@/store/productStore'
import { DefaultDatatable } from '@/components/dataTable/default/defaultDatatable'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

export const SinStockPage = () => {
  const navigate = useNavigate()
  const { products } = useProductStore()
  // const { config } = useConfigStore()
  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
      center: true,
      cell: ({ row }) => (
        <div className='text-center'>
          <button
            className="bg-slate-300 hover:bg-slate-400 px-3 py-1 rounded-md font-bold text-slate-500 text-xs text-center transition"
            onClick={() => {
              navigator.clipboard.writeText(row.original.id)
              Toaster.success('ID copiado al portapapeles')
            }}
            type="button"
          >
            {row.original.id}
          </button>
        </div>
      )
    },
    {
      accessorKey: 'image',
      header: () => <div className="w-5">Imágen</div>,
      cell: ({ row }) => (
        <div>
          <img src={row.original?.image} alt={row.original?.name} className="rounded-md w-12 h-12 object-cover" />
        </div>
      ),
      enableSorting: false,
    },
    {
      accessorKey: 'name',
      header: 'Nombre',
      center: true,
      cell: ({ row }) => (
        <div className="text-center">
          <span className="font-bold text-sm">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: 'categorie',
      header: 'Categoría',
      enableSorting: false,
      cell: ({ row }) => (
        <div className="">
          <span className="bg-slate-500 px-3 py-1 rounded-md font-medium text-white">{row.original.categorie.name}</span>
        </div>
      ),
    },
    {
      accessorKey: 'stock',
      header: () => <div className="text-center">Stock</div>,
      cell: ({ row }) => (
        <div className="text-center">
          <span className="bg-primary px-3 py-1 rounded-md font-medium text-white">{row.original.stock}</span>
        </div>
      ),
    },
    {
      accessorKey: 'Acciones',
      header: () => <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(`productos/editar/${row.original.id}`)}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      ),
      enableSorting: false,
    },
  ]

  const productsWithoutStock = products.filter(product => product.stock <= 3)

  return (
    <Layout>
      <DefaultDatatable
        data={productsWithoutStock}
        columns={columns}
        searchFields={['id', 'name', 'categorie', 'stock']}
        showDateFilter={false}
        showTimeFilter={false}
      />
    </Layout>
  )
}
