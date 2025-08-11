import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useRecordsStore } from '@/store/recordsStore'
import { TrendingDown, TrendingUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const TodayStatistics = () => {

  const { records, queryRecordsByDateRange } = useRecordsStore()
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    async function getWeekRange() {
      const today = new Date()
      const dayOfWeek = today.getDay()
      const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
      const monday = new Date(today)
      monday.setDate(today.getDate() + mondayOffset)
      const sundayOffset = dayOfWeek === 0 ? 0 : 7 - dayOfWeek
      const sunday = new Date(today)
      sunday.setDate(today.getDate() + sundayOffset)
      const result = await queryRecordsByDateRange(monday.toISOString().slice(0, 10), sunday.toISOString().slice(0, 10))
      setData(result)
      setIsLoading(true)
    }
    const semana = getWeekRange()
  }, [records])

  console.log(data)

  return (
    <Card className="bg-white dark:bg-secondary">
      <CardHeader>
        <CardTitle>Estadisticas de ventas esta semana</CardTitle>
        <CardDescription>
          Esta estadistica se basa en los datos de la semana en curso de lunes a
          domingo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="gap-4 grid grid-cols-2">
          <div className="flex flex-col bg-secondary p-4 border rounded-md">
            <span className="font-medium text-sm">Total en USD</span>
            <span className="font-bold text-lg">${
              !isLoading ? (
                <span className="animate-pulse">Cargando...</span>
              ) : (
                new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(data.totals.totalDolar)
              )
            }</span>
          </div>
          <div className="flex flex-col bg-secondary p-4 border rounded-md">
            <span className="font-medium text-sm">Producto más vendido</span>
            <span className="font-bold text-lg">
              {!isLoading ? (
                <span className="animate-pulse">Cargando...</span>
              ) :
                data.records.length > 0 ? (
                  <span className='text-xs'>{data.topProduct.name} x {data.topProduct.quantity}</span>
                ) : (
                  <span className='text-xs'>No hay productos vendidos</span>
                )
              }
            </span>
          </div>
          <div className="flex flex-col bg-secondary p-4 border rounded-md">
            <span className="font-medium text-sm">Categoría más vendida</span>
            <span className="font-bold text-lg">
              {!isLoading ? (
                <span className="animate-pulse">Cargando...</span>
              ) :
                data.records.length > 0 ? (
                  <span>{data.topCategory.category} x {data.topCategory.quantity}</span>
                ) : (
                  <span>No hay productos vendidos</span>
                )
              }
            </span>
          </div>
          <div className="flex flex-col bg-secondary p-4 border rounded-md">
            <span className="font-medium text-sm">Número de ventas</span>
            <span className="font-bold text-lg">{
              !isLoading ? (
                <span className="animate-pulse">Cargando...</span>
              ) : (
                data.count
              )
            }</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          {tendencia === "up" ? "Aumento" : "Disminución"} de <b>{Math.abs(porcentaje)}%</b> respecto al mes anterior{" "}
          {tendencia === "up" ? (
            <TrendingUp className="w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600" />
          )}
        </div> */}

      </CardFooter>
    </Card>
  )
}
