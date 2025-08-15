import React, { useState, useMemo } from 'react'
import DefaultTableSearch from './DefaultTableSearch'
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


// searchFields: array de strings con los campos a buscar

export const DefaultDatatable = ({
  columns,
  data,
  pageSize: initialPageSize = 10,
  searchFields = [],
  showDateFilter = true,
  showTimeFilter = true,
  disableFilters = false,
}) => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [sorting, setSorting] = useState([])
  const [search, setSearch] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [timeFrom, setTimeFrom] = useState('')
  const [timeTo, setTimeTo] = useState('')

  // Filtrado por búsqueda, rango de fechas y rango de horas
  const filteredData = useMemo(() => {
    const safeData = Array.isArray(data) ? data : []
    // Si los filtros están deshabilitados, retornamos los datos tal cual.
    if (disableFilters) return safeData
    let result = safeData
    // Filtro de texto
    if (search && searchFields.length > 0) {
      const lower = search.toLowerCase()
      result = result.filter(row =>
        searchFields.some(field => {
          const value = row[field]
          return value && value.toString().toLowerCase().includes(lower)
        })
      )
    }
    // Filtro de fechas y horas para createdAt
    const useDate = (showDateFilter || searchFields.includes('createdAt'))
    if (useDate && (dateFrom || dateTo || timeFrom || timeTo)) {
      result = result.filter(row => {
        const createdAt = row.createdAt ? new Date(row.createdAt) : null
        if (!createdAt) return false
        let valid = true
        // Fecha
        if (dateFrom) {
          const fromDate = new Date(dateFrom)
          fromDate.setHours(0, 0, 0, 0)
          valid = valid && createdAt >= fromDate
        }
        if (dateTo) {
          const toDate = new Date(dateTo)
          toDate.setHours(23, 59, 59, 999)
          valid = valid && createdAt <= toDate
        }
        // Hora
        if (timeFrom) {
          const [h, m] = timeFrom.split(':')
          const fromMinutes = parseInt(h) * 60 + parseInt(m)
          const createdMinutes = createdAt.getHours() * 60 + createdAt.getMinutes()
          valid = valid && createdMinutes >= fromMinutes
        }
        if (timeTo) {
          const [h, m] = timeTo.split(':')
          const toMinutes = parseInt(h) * 60 + parseInt(m)
          const createdMinutes = createdAt.getHours() * 60 + createdAt.getMinutes()
          valid = valid && createdMinutes <= toMinutes
        }
        return valid
      })
    }
    return result
  }, [data, search, searchFields, dateFrom, dateTo, timeFrom, timeTo, showDateFilter, disableFilters])

  const pageCount = Math.ceil(filteredData.length / pageSize)

  // El sort debe aplicarse sobre todos los datos filtrados, luego paginar
  const table = useReactTable({
    data: filteredData,
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
      {/* Buscador (oculto si disableFilters) */}
      {!disableFilters && (
        <DefaultTableSearch
          value={search}
          onChange={val => {
            setSearch(val)
            setPageIndex(0)
          }}
          searchFields={searchFields}
          dateFrom={dateFrom}
          dateTo={dateTo}
          onDateFromChange={val => {
            setDateFrom(val)
            setPageIndex(0)
          }}
          onDateToChange={val => {
            setDateTo(val)
            setPageIndex(0)
          }}
          timeFrom={timeFrom}
          timeTo={timeTo}
          onTimeFromChange={val => {
            setTimeFrom(val)
            setPageIndex(0)
          }}
          onTimeToChange={val => {
            setTimeTo(val)
            setPageIndex(0)
          }}
          showDateFilter={showDateFilter}
          showTimeFilter={showTimeFilter}
          onClearFilters={() => {
            setSearch('')
            setDateFrom('')
            setDateTo('')
            setTimeFrom('')
            setTimeTo('')
            setPageIndex(0)
          }}
        />
      )}
      <div className="bg-white dark:bg-accent/50 shadow-md p-2 rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  // Detectar si la columna tiene center: true
                  const isCentered = header.column.columnDef.center
                  return (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                      className={
                        (header.column.getCanSort()
                          ? 'cursor-pointer select-none relative hover:text-primary transition-colors font-bold'
                          : 'relative') +
                        (isCentered ? ' text-center' : '')
                      }
                    >
                      <div className={'flex items-center gap-1' + (isCentered ? ' justify-center' : '')}>
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
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {paginatedRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center text-sm text-muted-foreground py-6">
                  No hay items para mostrar
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    const isCentered = cell.column.columnDef.center
                    return (
                      <TableCell key={cell.id} className={isCentered ? 'text-center' : ''}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        {pageCount > 0 && (
          <DefaultTablePagination
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            pageSize={pageSize}
            setPageSize={setPageSize}
            pageCount={pageCount}
          />
        )}
      </div>

    </>
  )
}
