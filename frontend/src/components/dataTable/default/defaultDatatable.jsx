import React, { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
} from '@tanstack/react-table'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { DefaultTablePagination } from './defaultTablePagination'
import { Card, CardContent } from '@/components/ui/card'
import { ListCollapseIcon, SortAscIcon } from 'lucide-react'

export const DefaultDatatable = ({ columns, data, pageSize: initialPageSize = 10 }) => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [sorting, setSorting] = useState([])

  const pageCount = Math.ceil(data.length / pageSize)

  // El sort debe aplicarse sobre todos los datos, luego paginar
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    pageCount,
    state: { pagination: { pageIndex, pageSize }, sorting },
    setPageIndex,
    setPageSize,
    onSortingChange: setSorting,
  })

  // Obtener los datos ordenados y luego paginar
  const sortedRows = table.getSortedRowModel().rows
  const paginatedRows = sortedRows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)

  return (
    <>
      <Card className="w-full">
        <CardContent>
          <div className="bg-white shadow-md p-2 rounded-md">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map(headerGroup => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <TableHead
                        key={header.id}
                        onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none relative hover:text-primary transition-colors font-bold'
                            : 'relative'
                        }
                      >
                        <div className='flex items-center gap-1'>
                          {header.column.getCanSort() && (
                            <span className="">
                              {header.column.getIsSorted() === 'asc' ? '▲' : header.column.getIsSorted() === 'desc' ? '▼' : ''}
                            </span>
                          )}
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {
                            header.column.getCanSort() && <ListCollapseIcon className="w-4 h-4 text-gray-500" />
                          }
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {paginatedRows.map(row => (
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
            <DefaultTablePagination
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              pageSize={pageSize}
              setPageSize={setPageSize}
              pageCount={pageCount}
            />
          </div>
        </CardContent>
      </Card>
    </>
  )
}
