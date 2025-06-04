import { Layout } from '@/appLayout/Layout'
import React, { useEffect, useMemo } from 'react'
import { useSalesRecordsStore } from '@/features/store/salesRecords'
import { TableDefault } from '@/components/dataTable/tableDefault'
import { formatPrice } from '@/features/formatPrice'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { useCategoriesStore } from '@/features/store/categoriesStore'

export const SalesPage = () => {
  const { salesRecords, getSalesRecords } = useSalesRecordsStore()
  const { getCategories } = useCategoriesStore()

  useEffect(() => {
    getSalesRecords()
  }, [getSalesRecords, getCategories])

  // console.log(salesRecords.items[0])

  const columns = useMemo(
    () => [
      {
        header: 'id',
        id: 'id',
        accessorFn: (row) => `${row.id}`
      },
      {
        header: 'total',
        id: 'total',
        cell: info => (
          <div className='flex justify-between'>
            <span className='font-bold text-primary'>
              {formatPrice(info.row.original.total.totalBs)}
            </span>
            <span className='font-bold text-slate-600'>
              {formatPrice(info.row.original.total.profits)}
            </span>
            <span className='font-bold text-success'>
              {formatPrice(info.row.original.total.totalUsd)}
            </span>
          </div>
        )
      },
      {
        header: 'Productos',
        id: 'productList',
        cell: info => (
          <div className='text-center'>
            <Badge variant='outline'>
              {info.row.original.productList.length}
            </Badge>
          </div>
        )
      },
      {
        header: 'Lista negra',
        id: 'black_list_clt',
        cell: info => (
          <div className='text-center'>
            {
              info.row.original['@expand'] !== undefined
                ? (
                  <Badge variant='outline'>
                    {
                      info.row.original['@expand'].black_list_clt.name
                    }
                  </Badge>
                )
                : (
                  <Badge className='bg-slate-300 hover:bg-slate-300 text-slate-500 hover:text-slate-500' variant='outline'>
                    No Posée
                  </Badge>
                )
            }
          </div>
        )
      },
      {
        header: 'Precio dolar',
        id: 'dolarPrice',
        cell: info => (
          <div className='text-center'>
            <Badge>
              {formatPrice(info.row.original.dolarPrice, 'usd')}
            </Badge>
          </div>
        )
      },
      {
        header: 'Fecha',
        id: 'created',
        cell: info => (
          <div className='text-center'>
            {format(new Date(info.row.original.created), 'dd-MM-yyyy', { locale: es })}
          </div>
        )
      }
    ],
    [salesRecords]
  )

  return (
    <Layout>
      <div className='p-4'>
        <TableDefault
          columns={columns}
          data={salesRecords.load ? salesRecords.items : {}}
        />
      </div>
    </Layout>
  )
}
