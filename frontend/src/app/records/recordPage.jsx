import React, { useMemo, useState } from 'react'
import Layout from '../layout'
import { DefaultDatatable } from '@/components/dataTable/default/defaultDatatable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecordsStore } from '@/store/recordsStore'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { Label } from 'recharts'
import { Badge } from "@/components/ui/badge"

export const RecordPage = () => {
  const navigate = useNavigate()
  const { records } = useRecordsStore()
  const recordsMemo = useMemo(() => records, [records])
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
              toast('ID copiado al portapapeles')
            }}
            type="button"
          >
            {row.original.id}
          </button>
        </div>
      )
    },
    {
      accessorKey: 'productList',
      header: 'Num productos',
      center: true,
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
      center: true,
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
      center: true,
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
      center: true,
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
      center: true,
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
      center: true,
      enableSorting: false,
      header: () => <div className="text-center">Lista negra</div>,
      cell: ({ row }) => (
        <Link className="flex justify-center items-center" to={`/lista-negra/${row.original.BlackList.id}`}>
          <Badge className="uppercase font-bold">
            {row.original.BlackList.name != null ? row.original.BlackList.name : 'N/A'}
          </Badge>
        </Link>
      ),
    },
    {
      accessorKey: 'createdAt',
      center: true,
      header: () => <div className="text-center">Fecha</div>,
      cell: ({ row }) => {
        if (row.original.createdAt) {
          const dateObj = new Date(row.original.createdAt)
          const dateStr = dateObj.toLocaleDateString('es-VE', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
          })
          const timeStr = dateObj.toLocaleTimeString('es-VE', {
            hour: '2-digit',
            minute: '2-digit',
          })
          return (
            <span className="flex justify-center items-center font-bold text-center">
              {`${dateStr} - ${timeStr}`}
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
      center: true,
      enableSorting: false,
      header: () => <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(`/ventas/detalles/${row.original.id}`)}
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
      <Card className="w-full h-[90vh]">
        <CardContent>
          <div className="">
            <div className='flex justify-between items-center gap-3 mb-4'>
              <div className="flex-col gap-4 mb-2 w-[25%]">
                <label htmlFor="date-input" className="font-semibold text-xs text-nowrap">Seleccionar fecha</label>
                <Input
                  id="date-input"
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  max={dailyProfits.length > 0 ? dailyProfits[0].date : ''}
                />
              </div>
              {selectedDate && selectedDayStats && (
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex flex-col font-bold">
                    <label className="text-[10px] uppercase">Ganancias del día</label>
                    <span className='font-bold'>
                      <span className='text-primary'>{selectedDayStats.profitsBs.toFixed(2)} </span>
                      <span className='text-xs'> | </span>
                      <span className='text-usd'>${selectedDayStats.profitsUsd.toFixed(2)}</span>
                    </span>
                  </div>
                  <div className="flex flex-col font-bold">
                    <label className="text-[10px] uppercase">Ventas totales</label>
                    <span className='font-bold'>
                      <span className='text-primary'>{selectedDayStats.totalBs.toFixed(2)}</span>
                      <span className='text-xs'> | </span>
                      <span className='text-usd'>${selectedDayStats.totalUsd.toFixed(2)}</span>
                    </span>
                  </div>
                  <div className='flex flex-col font-bold'>
                    <label className="text-[10px] uppercase">número de Ventas </label>
                    <span className='font-bold text-primary'>{selectedDayStats.ventas}</span>
                  </div>
                  <div className="flex flex-col font-bold">
                    <label className="text-[10px] uppercase">Número de productos </label>
                    <span className='font-bold text-primary'>{selectedDayStats.productos}</span>
                  </div>
                  {mostSoldProduct && (
                    <div className="flex flex-col font-bold">
                      <label className="text-[10px] uppercase">Producto más vendido: </label>
                      <span className="max-w-[270px] font-bold text-usd text-xs text-wrap">{mostSoldProduct.name} ({mostSoldProduct.quantity})</span>
                    </div>
                  )}
                </div>
              )}
              {selectedDate && !selectedDayStats && (
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xl">Sin registros</span>
                </div>
              )}
            </div>
          </div>
          <DefaultDatatable
            columns={columns}
            data={recordsMemo}
            searchFields={['id', 'createdAt', 'user', 'blackList', 'dolar_price', 'productList']}
            showDateFilter={true}
            showTimeFilter={true}
          />
        </CardContent>
      </Card>
    </Layout>
  )
}
