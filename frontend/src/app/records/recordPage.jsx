import React, { useMemo, useState } from 'react'
import Layout from '../layout'
import { DefaultDatatable } from '@/components/dataTable/default/defaultDatatable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useRecordsStore } from '@/store/recordsStore'
import { Input } from '@/components/ui/input'

export const RecordPage = () => {
  const navigate = useNavigate()
  const { records } = useRecordsStore()
  const recordsMemo = useMemo(() => records, [records])
  const columns = [
    {
      accessorKey: 'productList',
      header: 'Num productos',
      cell: ({ row }) => (
        <div className='text-center'>
          <span className="bg-slate-300 px-3 py-1 rounded-md font-bold text-slate-500 text-xs text-center">
            {row.original.productList.length}
          </span>
        </div>
      )
    },
    {
      accessorKey: 'dolar_price',
      header: () => <div className="text-center">Dolar de la venta</div>,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-2">
          <span className="bg-slate-300 px-2 py-1 rounded-md font-bold text-slate-500 text-xs text-center">
            {row.original.dolar_price}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'Totales',
      header: () => <div className="flex justify-center items-center">Totales</div>,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-4">
          <span className="font-bold text-primary text-center">
            Bs {row.original.totals?.totalBs.toFixed(2) || 0}
          </span>
          <span className="font-bold text-[10px] text-center">|</span>
          <span className="font-bold text-usd text-center">
            ${row.original.totals?.totalDolar.toFixed(2) || 0}
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
            Bs {row.original.totals?.totalProfits.bs.toFixed(2) || 0}
          </span>
          <span className="font-bold text-[10px] text-center">|</span>
          <span className="font-bold text-usd text-center">
            ${row.original.totals?.totalProfits.usd.toFixed(2) || 0}
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

  // Obtener la fecha de hoy en formato YYYY-MM-DD usando la fecha local de la PC
  function getLocalDateString() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  const [selectedDate, setSelectedDate] = useState(getLocalDateString())

  // Agrupar y sumar ganancias por día
  const dailyProfits = useMemo(() => {
    const grouped = {}
    records.forEach(record => {
      if (!record.createdAt) return
      const date = new Date(record.createdAt)
      // Formato YYYY-MM-DD
      const key = date.toISOString().slice(0, 10)
      if (!grouped[key]) {
        grouped[key] = { bs: 0, usd: 0 }
      }
      grouped[key].bs += record.totals?.totalProfits?.bs || 0
      grouped[key].usd += record.totals?.totalProfits?.usd || 0
    })
    // Convertir a array ordenado por fecha descendente
    return Object.entries(grouped)
      .map(([date, profits]) => ({ date, ...profits }))
      .sort((a, b) => b.date.localeCompare(a.date))
  }, [records])

  // Filtrar registros por la fecha seleccionada usando la fecha local de la PC
  const selectedDayRecords = useMemo(() => {
    if (!selectedDate) return []
    return records.filter(record => {
      if (!record.createdAt) return false
      const localDate = new Date(record.createdAt)
      const year = localDate.getFullYear()
      const month = String(localDate.getMonth() + 1).padStart(2, '0')
      const day = String(localDate.getDate()).padStart(2, '0')
      const recordLocalDate = `${year}-${month}-${day}`
      return recordLocalDate === selectedDate
    })
  }, [records, selectedDate])

  // Calcular totales de la fecha seleccionada
  const selectedDayStats = useMemo(() => {
    if (!selectedDayRecords.length) return null
    let profitsBs = 0, profitsUsd = 0, totalBs = 0, totalUsd = 0, ventas = 0, productos = 0
    selectedDayRecords.forEach(record => {
      profitsBs += record.totals?.totalProfits?.bs || 0
      profitsUsd += record.totals?.totalProfits?.usd || 0
      totalBs += record.totals?.totalBs || 0
      totalUsd += record.totals?.totalDolar || 0
      ventas += 1
      productos += Array.isArray(record.productList) ? record.productList.length : 0
    })
    return { profitsBs, profitsUsd, totalBs, totalUsd, ventas, productos }
  }, [selectedDayRecords])

  // Calcular el producto más vendido en la fecha seleccionada
  const mostSoldProduct = useMemo(() => {
    if (!selectedDayRecords.length) return null
    const productCount = {}
    selectedDayRecords.forEach(record => {
      if (Array.isArray(record.productList)) {
        record.productList.forEach(product => {
          if (!product.name) return
          if (!productCount[product.name]) {
            productCount[product.name] = 0
          }
          // Si hay campo quantity, usarlo, si no, sumar 1
          productCount[product.name] += product.quantity || 1
        })
      }
    })
    // Buscar el producto con mayor cantidad
    let max = 0
    let name = null
    Object.entries(productCount).forEach(([prod, qty]) => {
      if (qty > max) {
        max = qty
        name = prod
      }
    })
    if (!name) return null
    return { name, quantity: max }
  }, [selectedDayRecords])

  return (
    <Layout>
      <Card className="w-full">
        {/* <CardHeader>
          <CardTitle>Registros</CardTitle>
        </CardHeader> */}
        <CardContent>
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-2">
              <label htmlFor="date-input" className="font-semibold text-nowrap">Seleccionar fecha:</label>
              <Input
                id="date-input"
                type="date"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                className="px-2 py-1 border rounded w-48"
                max={dailyProfits.length > 0 ? dailyProfits[0].date : ''}
              />
            </div>
            {selectedDate && selectedDayStats && (
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-bold text-primary">Ganancias: Bs {selectedDayStats.profitsBs.toFixed(2)} | ${selectedDayStats.profitsUsd.toFixed(2)}</span>
                <span className="font-bold text-blue-700">Ventas: Bs {selectedDayStats.totalBs.toFixed(2)} | ${selectedDayStats.totalUsd.toFixed(2)}</span>
                <span className="font-bold text-slate-700"># Ventas: {selectedDayStats.ventas}</span>
                <span className="font-bold text-slate-700">Productos vendidos: {selectedDayStats.productos}</span>
                {mostSoldProduct && (
                  <span className="font-bold text-green-700">Más vendido: {mostSoldProduct.name} ({mostSoldProduct.quantity})</span>
                )}
              </div>
            )}
            {selectedDate && !selectedDayStats && (
              <span className="text-slate-400">Sin registros</span>
            )}
          </div>
          <DefaultDatatable columns={columns} data={recordsMemo} />
        </CardContent>
      </Card>
    </Layout>
  )
}
