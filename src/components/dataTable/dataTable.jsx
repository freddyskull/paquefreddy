import React from 'react'
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { ScrollArea } from '@/components/ui/scroll-area'

export const DataTable = ({ columns, data, filtersTable }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: filtersTable.sorting,
      columnVisibility: filtersTable.columnVisibility,
      columnFilters: filtersTable.columnFilters,
      pagination: filtersTable.pagination,
      globalFilter: filtersTable.filters
    }
  })

  return (
    <ScrollArea className='my-2 mr-1 p-4 h-[80vh]'>
      <div className='gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pt-4 pb-4 w-full'>
        {table.getRowModel().rows.map(row => (
          <div key={row.id} className='relative p-4 product-container'>
            {row.getVisibleCells().map(cell => (
              <div key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
