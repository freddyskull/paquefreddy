
import React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select'

export const PaginationProducts = ({ table }) => {
  if (table.getPageCount() <= 1) return null
  const pageCount = table.getPageCount()
  const current = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const pages = []
  // Siempre mostrar la primera página
  pages.push(0)
  // Elipsis al inicio
  if (current > 2) {
    pages.push('start-ellipsis')
  }
  // Páginas adyacentes
  for (let i = Math.max(1, current - 1); i <= Math.min(pageCount - 2, current + 1); i++) {
    pages.push(i)
  }
  // Elipsis al final
  if (current < pageCount - 3) {
    pages.push('end-ellipsis')
  }
  // Siempre mostrar la última página si hay más de una
  if (pageCount > 1) {
    pages.push(pageCount - 1)
  }

  // Opciones para el select de cantidad de productos por página
  const pageSizeOptions = [10, 20, 30, 50, 100]

  return (
    <div className="flex justify-between items-center mt-4 w-full">
      {/* Paginación a la izquierda */}
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={e => {
                  e.preventDefault()
                  table.previousPage()
                }}
                aria-disabled={!table.getCanPreviousPage()}
                tabIndex={!table.getCanPreviousPage() ? -1 : 0}
                style={{ pointerEvents: !table.getCanPreviousPage() ? 'none' : 'auto', opacity: !table.getCanPreviousPage() ? 0.5 : 1 }}
              />
            </PaginationItem>
            {pages.map((page, idx) => {
              if (page === 'start-ellipsis' || page === 'end-ellipsis') {
                return (
                  <PaginationItem key={page + idx}>
                    <PaginationEllipsis />
                  </PaginationItem>
                )
              }
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={current === page}
                    onClick={e => {
                      e.preventDefault()
                      table.setPageIndex(page)
                    }}
                    href="#"
                  >
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
            <PaginationItem>
              <PaginationNext
                onClick={e => {
                  e.preventDefault()
                  table.nextPage()
                }}
                aria-disabled={!table.getCanNextPage()}
                tabIndex={!table.getCanNextPage() ? -1 : 0}
                style={{ pointerEvents: !table.getCanNextPage() ? 'none' : 'auto', opacity: !table.getCanNextPage() ? 0.5 : 1 }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      {/* Select a la derecha */}
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm">Mostrar</span>
        <Select
          value={String(pageSize)}
          onValueChange={value => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="w-20 h-9">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {pageSizeOptions.map(size => (
              <SelectItem key={size} value={String(size)}>{size}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-muted-foreground text-sm">productos</span>
      </div>
    </div>
  )
}
