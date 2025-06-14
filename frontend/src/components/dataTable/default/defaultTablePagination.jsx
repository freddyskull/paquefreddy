import React from 'react'
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

export const DefaultTablePagination = ({ pageIndex, setPageIndex, pageSize, setPageSize, pageCount }) => {
  if (pageCount <= 1) return null
  const current = pageIndex
  const pages = []
  pages.push(0)
  if (current > 2) pages.push('start-ellipsis')
  for (let i = Math.max(1, current - 1); i <= Math.min(pageCount - 2, current + 1); i++) {
    pages.push(i)
  }
  if (current < pageCount - 3) pages.push('end-ellipsis')
  if (pageCount > 1) pages.push(pageCount - 1)
  const pageSizeOptions = [10, 20, 30, 50, 100]

  return (
    <div className="flex xl:flex-row flex-col xl:justify-between items-center gap-4 mt-4 mb-12 xl:mb-0 w-full">
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={e => {
                  e.preventDefault()
                  setPageIndex(old => Math.max(old - 1, 0))
                }}
                aria-disabled={pageIndex === 0}
                tabIndex={pageIndex === 0 ? -1 : 0}
                style={{ pointerEvents: pageIndex === 0 ? 'none' : 'auto', opacity: pageIndex === 0 ? 0.5 : 1 }}
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
                      setPageIndex(page)
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
                  setPageIndex(old => Math.min(old + 1, pageCount - 1))
                }}
                aria-disabled={pageIndex >= pageCount - 1}
                tabIndex={pageIndex >= pageCount - 1 ? -1 : 0}
                style={{ pointerEvents: pageIndex >= pageCount - 1 ? 'none' : 'auto', opacity: pageIndex >= pageCount - 1 ? 0.5 : 1 }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm">Mostrar</span>
        <Select
          value={String(pageSize)}
          onValueChange={value => {
            setPageSize(Number(value))
            setPageIndex(0)
          }}
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
