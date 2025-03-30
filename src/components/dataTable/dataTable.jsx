import React, { useRef } from 'react'
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '../ui/button'
import { Edit2, SearchCode, Trash } from 'lucide-react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export const DataTable = ({ columns, data, filtersTable, editItem, deleteItem }) => {
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

  // Mueve todos los refs a un objeto para evitar crearlos dinámicamente
  const nodeRefs = useRef({})

  return (
    <ScrollArea className='my-2 mr-1 p-4 h-[80vh]'>
      <TransitionGroup className='gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 pt-4 pb-4 w-full'>
        {table.getRowModel().rows.map(row => {
          // Asegúrate de que cada fila tenga un ref único
          if (!nodeRefs.current[row.id]) {
            nodeRefs.current[row.id] = React.createRef()
          }

          return (
            <CSSTransition
              key={row.id}
              timeout={500} // Duración de la animación
              classNames='fade' // Referencia a las clases CSS
              nodeRef={nodeRefs.current[row.id]} // Usa el ref único para esta fila
            >
              <div ref={nodeRefs.current[row.id]} className='relative p-4 product-container'>
                {row.getVisibleCells().map(cell => (
                  <div key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
                <div className='mt-4 actions'>
                  <Button
                    variant='outline'
                    className='px-2 h-8'
                    onClick={() => editItem(row.original)}
                  >
                    <Edit2 />
                  </Button>
                  <Button
                    variant='outline'
                    className='hover:bg-destructive px-2 h-8'
                    onClick={() => deleteItem(row.original)}
                  >
                    <Trash />
                  </Button>
                  <Button variant='outline' className='hover:bg-warn px-2 h-8'>
                    <SearchCode />
                  </Button>
                </div>
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </ScrollArea>
  )
}
