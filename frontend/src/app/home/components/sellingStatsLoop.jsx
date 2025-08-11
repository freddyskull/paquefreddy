import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from 'react-router-dom'
import { SearchCheck } from 'lucide-react'
export const SellingStatsLoop = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>NOMBRE</TableHead>
          <TableHead className="text-center">CANT</TableHead>
          <TableHead className="text-center">VENDIDO</TableHead>
          <TableHead className="text-center">VER</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow>
            <TableCell className="max-w-[150px] overflow-hidden font-medium text-ellipsis">
              {item.name}
            </TableCell>
            <TableCell className="text-center">{
              new Intl.NumberFormat('en-US').format(item.qty)
            }</TableCell>
            <TableCell className="font-bold text-primary text-center">${
              new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(item.profits)
            }</TableCell>
            <TableCell className="flex justify-center items-center">
              <Link
                to={`/productos/${item.prodId}`}
                className="text-muted-foreground text-center hover:underline"
              >
                <SearchCheck className="w-4 h-4" />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
