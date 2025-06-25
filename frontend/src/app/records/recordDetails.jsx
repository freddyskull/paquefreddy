import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import { Link, useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useRecordsStore } from '@/store/recordsStore'
import { DefaultDatatable } from '@/components/dataTable/default/defaultDatatable'
import { Button } from '@/components/ui/button'
import { BackpackIcon } from 'lucide-react'

export const RecordDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const { fetchRecord } = useRecordsStore()

  useEffect(() => {
    const getRecord = async () => {
      const record = await fetchRecord(id)
      setData(record)
    }
    getRecord()
  }, [id])

  console.log(data)

  const columns = [
    {
      accessorKey: 'image',
      header: 'Imágen',
      enableSorting: false,
      center: true,
      cell: ({ row }) => (
        <div className='flex justify-center'>
          <img src={row.original.image} alt={row.original.name} className="rounded-full w-10 h-10" />
        </div>
      )
    },
    {
      accessorKey: 'name',
      header: 'Nombre del producto',
      enableSorting: false,
      center: true,
      cell: ({ row }) => (
        <div className='text-center'>
          <span className="font-bold text-xl">
            {row.original.name || 'N/A'}
          </span>
        </div>
      )
    },
    {
      accessorKey: 'price_bs',
      header: () => <div className="text-center">Precio Bs</div>,
      center: true,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-2">
          <span className='font-bold text-primary text-xl'>
            {row.original.price_bs?.toFixed(2) || 0}
          </span>
        </div>
      )
    },
    {
      accessorKey: 'price',
      header: () => <div className="text-center">Precio Usd</div>,
      center: true,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-2">
          <span className='font-bold text-usd text-xl'>
            {row.original.price?.toFixed(2) || 0}
          </span>

        </div>
      )
    },
    {
      accessorKey: 'quantity',
      header: () => <div className="text-center">Cantidad</div>,
      center: true,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-2">
          <span className="bg-slate-300 px-2 py-1 rounded-md font-bold text-slate-500 text-xs text-center">
            {row.original.quantity || 0}
          </span>
        </div>
      )
    }
  ]
  return (
    <Layout>
      <Card className="flex md:h-[88vh]">
        <CardHeader className="flex justify-between items-center">
          <h2 className="font-bold text-sm uppercase">Número de productos {data?.productList?.length || 0}</h2>
          <h2 className="font-bold text-sm uppercase">
            fecha de creación: {data?.createdAt ? new Date(data.createdAt).toLocaleDateString() : ''}
          </h2>
          <div className='text-center'>
            <h4 className="font-bold text-xs uppercase">venta Totales: <span className='text-primary'>{data?.totals.totalBs.toFixed(2) || 0}</span> | <span className='text-usd'>{data?.totals.totalDolar.toFixed(2) || 0}</span> </h4>
            <h4 className="font-bold text-xs uppercase">ganancias Totales: <span className='text-primary'>{data?.totals.totalProfits.bs.toFixed(2) || 0}</span> | <span className='text-usd'>{data?.totals.totalProfits.bs.toFixed(2) || 0}</span> </h4>
          </div>
          <h2 className="font-bold text-sm uppercase">
            Lista negra: {data?.blacklist || 'N/A'}
          </h2>
          <Link to="/ventas">
            <Button variant="outline"  >
              Ver lista
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="w-full overflow-y-auto">
          <DefaultDatatable columns={columns} data={data?.productList || []} />
        </CardContent>
      </Card>
    </Layout>
  )
}
