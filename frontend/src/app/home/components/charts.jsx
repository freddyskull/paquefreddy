// Tooltip personalizado para mostrar total y ganancia
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div style={{ background: '#fff', border: '1px solid #ccc', padding: 10 }}>
        <div><b>{label}</b></div>
        <div>Total: <b>${new Intl.NumberFormat('en-US').format(data.total)}</b></div>
        <div>Ganancia: <b>${new Intl.NumberFormat('en-US').format(data.profit)}</b></div>
      </div>
    )
  }
  return null
}

import { TrendingDown, TrendingUp } from "lucide-react"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { useRecordsStore } from "@/store/recordsStore"
import { useConfigStore } from "@/store/configStore"


export const Charts = () => {


  const getMonthName = (date) =>
    date.toLocaleString("es-ES", { month: "long" })
  const ahora = new Date()
  const { currency } = useConfigStore()
  const nombreMesActual = getMonthName(ahora)
  const haceCincoMeses = new Date(ahora.getFullYear(), ahora.getMonth() - 5, 1)
  const nombreMesHaceCincoMeses = getMonthName(haceCincoMeses)
  const anioActual = ahora.getFullYear()
  const { records, queryRecordsByDateRange } = useRecordsStore()

  const [chartData, setChartData] = useState([
    { month: "Cargando", total: 100 },
    { month: "Cargando", total: 100 },
    { month: "Cargando", total: 100 },
    { month: "Cargando", total: 100 },
    { month: "Cargando", total: 100 }
  ])


  const chartConfig = {
    total: {
      label: "Total",
      color: currency === 'BS' ? "var(--primary)" : "var(--usd)",
    },
    // label: {
    //   color: currency === 'BS' ? "var(--primary)" : "var(--usd)",
    // },
  
  }

  useEffect(() => {
    const ahora = new Date()
    const inicio = new Date(ahora.getFullYear(), ahora.getMonth() - 5, 1)
    // const fin = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0)
    
    async function getData() {
      const meses = []
      for (let i = 0; i < 6; i++) {
        const fecha = new Date(inicio.getFullYear(), inicio.getMonth() + i, 1)
        const nombreMes = fecha.toLocaleString("es-ES", { month: "long" })
        const startDate = new Date(fecha.getFullYear(), fecha.getMonth(), 1)
        const endDate = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0)
        const result = await queryRecordsByDateRange(startDate, endDate)
        const total = result?.totals?.totalDolar || 0
        const profit = result?.totals?.totalProfits?.usd || 0
        meses.push({ month: nombreMes, total, profit })
      }
      setChartData(meses.reverse())
    }

    getData()
  }, [records])


  // Calcular la comparación entre este mes y el anterior
  const totalEsteMes = Number(chartData[0]?.total || 0)
  const totalMesAnterior = Number(chartData[1]?.total || 0)
  const diferencia = totalEsteMes - totalMesAnterior
  const porcentaje = totalMesAnterior !== 0 ? ((diferencia / totalMesAnterior) * 100).toFixed(1) : "0.0"
  const tendencia = diferencia >= 0 ? "up" : "down"

  return (
    <Card className="bg-white dark:bg-secondary">
      <CardHeader>
        <CardTitle>Estadisticas de los ultimos meses</CardTitle>
        <CardDescription>
          {nombreMesActual} - {nombreMesHaceCincoMeses} {anioActual}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ right: 16 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="total" type="number" hide />
            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
            />
            <Bar
              dataKey="total"
              layout="vertical"
              fill="var(--color-total)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="total"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value) => `$${new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(value)}`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {tendencia === "up" ? "Aumento" : "Disminución"} de <b>{Math.abs(porcentaje)}%</b> respecto al mes anterior{" "}
          {tendencia === "up" ? (
            <TrendingUp className="w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600" />
          )}
        </div>
        <div className="text-muted-foreground leading-none">
          Muestra el total de ventas en los últimos 5 meses
        </div>
      </CardFooter>
    </Card>
  )
}
