import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'

export const DefaultDatatable = ({ columns, data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {table.getHeaderGroups()[0].headers.map(header => (
            <TableHead key={header.id}>
              {typeof header.column.columnDef.header === 'function'
                ? header.column.columnDef.header()
                : header.column.columnDef.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
