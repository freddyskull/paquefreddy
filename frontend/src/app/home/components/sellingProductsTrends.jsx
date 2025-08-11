import { DateBadge } from '@/components/dataTable/products/dateBadge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useRecordsStore } from '@/store/recordsStore'
import { SellingStatsLoop } from './sellingStatsLoop'

export const SellingProductsTrends = () => {

    const [selected, setSelected] = useState("mas-vendido")
    const { records, salesStats } = useRecordsStore()
    const [data, setData] = useState(null)

    // calcular el año
    const currentYear = new Date().getFullYear()
    const startOfYear = `${currentYear}-01-01`
    const endOfYear = `${currentYear}-12-31`

    useEffect(() => {

        async function fetchData() {
            const result = await salesStats(startOfYear, endOfYear)
            setData(result)
        }
        fetchData()

    }, [records])


    return (
        <Card className="bg-white dark:bg-secondary">
            <CardHeader>
                <CardTitle className="flex items-center">
                    <ToggleGroup type="single" className="bg-accent/50" value={selected} onValueChange={setSelected}>
                        <ToggleGroupItem value="mas-vendido" className="text-xs">
                            MAS VENDIDOS
                        </ToggleGroupItem>
                        <ToggleGroupItem value="menos-vendido" className="px-4 text-xs">
                            MENOS VENDIDOS
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <span className="ml-2 text-foreground/50 text-xs">(Anualmente)</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="max-h-[120px] overflow-auto">
                {
                    data && <SellingStatsLoop data={selected === "mas-vendido" ? data?.highSelling : data?.lowSelling} />
                }
            </CardContent>
        </Card >
    )
}