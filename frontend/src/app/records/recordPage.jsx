import React, { useMemo } from 'react'
import Layout from '../layout'
import { DefaultDatatable } from '@/components/dataTable/default/defaultDatatable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useRecordsStore } from '@/store/recordsStore'

export const RecordPage = () => {
  const navigate = useNavigate()
  const { records } = useRecordsStore()
  const recordsMemo = useMemo(() => records, [records])
  const columns = [
    {
      accessorKey: 'productList',
      header: 'Num productos',
      cell: ({ row }) => row.original?.productList.length || 0,
    },
    {
      accessorKey: 'dolar_price',
      header: () => <div className="text-center">Dolar de la venta</div>,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-2">
          <span className="font-bold text-primary text-center">
            {row.original.dolar_price}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'Totales',
      header: () => <div className="text-center">Totales</div>,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-4">
          <span className="font-bold text-primary text-center">
            Bs {row.original.totals.totalBs.toFixed(2)}
          </span>
          <span className="font-bold text-[10px] text-center">|</span>
          <span className="font-bold text-usd text-center">
            ${row.original.totals.totalDolar.toFixed(2)}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'Ganancias',
      header: () => <div className="text-center">Ganacias</div>,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-4">
          <span className="font-bold text-primary text-center">
            Bs {row.original.totals.totalProfits.bs.toFixed(2)}
          </span>
          <span className="font-bold text-[10px] text-center">|</span>
          <span className="font-bold text-usd text-center">
            ${row.original.totals.totalProfits.usd.toFixed(2)}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'user',
      header: () => <div className="text-center">Usuario</div>,
      enableSorting: false,
      cell: ({ row }) => (
        <span className="flex justify-center items-center font-bold text-center">
          {row.original.user != null ? row.original.user : 'N/A'}
        </span>
      ),
    },
    {
      accessorKey: 'blackList',
      enableSorting: false,
      header: () => <div className="text-center">Lista negra</div>,
      cell: ({ row }) => (
        <span className="flex justify-center items-center font-bold text-center">
          {row.original.blackList != null ? row.original.blackList : 'N/A'}
        </span>
      ),
    },
    {
      accessorKey: 'createdAt',
      header: () => <div className="text-center">Fecha</div>,
      cell: ({ row }) => {
        if (row.original.createdAt) {
          return (
            <span className="flex justify-center items-center font-bold text-center">
              {row.original.createdAt
                ? new Intl.DateTimeFormat('es-VE', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit',
                }).format(new Date(row.original.createdAt))
                : 'N/A'}
            </span>
          )
        }
        return (
          <span className="flex justify-center items-center font-bold text-center">
            N/A
          </span>
        )
      },
    },

    {
      accessorKey: 'Acciones',
      enableSorting: false,
      header: () => <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(`/ventas/${row.original.id}`)}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ]

  return (
    <Layout>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Registros</CardTitle>
        </CardHeader>
        <CardContent>
          <DefaultDatatable columns={columns} data={recordsMemo} />
        </CardContent>
      </Card>
    </Layout>
  )
}
