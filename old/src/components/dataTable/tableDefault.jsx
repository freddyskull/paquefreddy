import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel } from '@tanstack/react-table'
import { Input } from '../ui/input'

// Define filtersTable como un objeto inicial vacío con propiedades necesarias
const filtersTable = {
  columnFilters: [],
  sorting: []
}

export const TableDefault = ({ columns, data, loadMoreData }) => {
  const [globalFilter, setGlobalFilter] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const tableContainerRef = useRef(null)

  const columnFilters = useMemo(() => [
    ...filtersTable.columnFilters,
    dateFilter && {
      id: 'date', // Asegúrate de que la columna tenga un id 'date'
      value: dateFilter
    }
  ].filter(Boolean), [filtersTable.columnFilters, dateFilter])

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting: filtersTable.sorting,
      columnFilters
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter
  })

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value)
  }

  const handleScroll = () => {
    if (tableContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = tableContainerRef.current
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        if (data.length > 0) {
          loadMoreData() // Llama a la función para cargar más datos
        } else {
          console.log('No hay más elementos para cargar') // Notificación en consola
        }
      }
    }
  }

  useEffect(() => {
    const container = tableContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [loadMoreData, data.length])

  return (
    <div className=''>
      <div className='flex gap-4 mb-4'>
        <Input
          placeholder='Buscar por palabras clave...'
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <Input
          type='date'
          placeholder='Filtrar por fecha...'
          value={dateFilter}
          onChange={handleDateFilterChange}
        />
      </div>
      <div className='mb-2 text-gray-600'>
        Total de elementos: {table.getRowModel().rows.length}
      </div>
      {data.length === 0 && (
        <div className='mt-4 text-gray-500 text-center'>
          No hay más elementos para mostrar.
        </div>
      )}
      <div
        className='max-h-96'
        ref={tableContainerRef}
      >
        <table className='bg-white border border-gray-200 min-w-full border-collapse'>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className='p-2 border border-gray-300'>
                    {header.isPlaceholder
                      ? null
                      : header.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className='p-2 border border-gray-300'>
                    {cell.column.columnDef.cell
                      ? cell.column.columnDef.cell(cell.getContext())
                      : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
