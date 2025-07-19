import React, { useState, useMemo, useEffect } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/cardProducts"
import { useConfigStore } from '@/store/configStore'
import { useCategoriesStore } from '@/store/categoriesStore'
import { useProductStore } from '@/store/productStore'


import { FiltersTable } from '@/components/dataTable/products/filtersTable'
import { PaginationProducts } from './paginationProducts'


export const ProductsDataTable = ({ data }) => {
  const { categories } = useCategoriesStore()
  const { patchProduct } = useProductStore()
  // Estado para mostrar/ocultar price_ent, persistente en localStorage
  const [showPriceEnt, setShowPriceEnt] = useState(() => {
    const stored = localStorage.getItem('showPriceEnt')
    return stored === null ? true : stored === 'true'
  })

  useEffect(() => {
    localStorage.setItem('showPriceEnt', showPriceEnt)
  }, [showPriceEnt])

  const { config, currency, isLoading: isLoadingConfig } = useConfigStore()

  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Nombre',
      filterFn: (row, columnId, value) => {
        return value
          ? row
            .getValue(columnId)
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
          : true
      },
    },
    {
      accessorKey: 'image',
      header: 'Imagen',
    },
    {
      accessorKey: 'price',
      header: 'price',
      // filterFn: (row, columnId, value) => {
      //   const price = parseFloat(row.getValue(columnId));
      //   const searchValue = parseFloat(value);
      //   return !value || isNaN(searchValue) || price === searchValue;
      // },
      // meta: {
      //   filterVariant: 'range',
      // },
    },
    {
      accessorKey: 'slugs',
      header: 'Slugs',
      filterFn: (row, columnId, value) => {
        return value
          ? row
            .getValue(columnId)
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
          : true
      },
    },
    {
      accessorKey: 'brand',
      header: 'Marca',
      filterFn: (row, columnId, value) => {
        return value
          ? row
            .getValue(columnId)
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
          : true
      },
    },
    {
      accessorKey: 'slugs_url',
      header: 'Slugs URL',
      filterFn: (row, columnId, value) => {
        return value
          ? row
            .getValue(columnId)
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
          : true
      },
    },
    {
      accessorKey: 'price_ent',
      header: 'price_ent',
      meta: {
        filterVariant: 'range',
      },
    },
    {
      accessorKey: 'categorie',
      header: 'categorie',
    },
    {
      accessorKey: 'categorie_slug',
      header: 'categorie_slug',
    },
    {
      accessorKey: 'createdAt',
      header: 'fecha creación',
    },
    {
      accessorKey: 'updatedAt',
      header: 'fecha actualización',
    },
  ], [])

  const memoizedData = useMemo(() => data, [data])
  const [searchTerm, setSearchTerm] = useState('')
  const [columnFilters, setColumnFilters] = useState([
    {
      id: "price",
      value: ["", ""]
    },
    {
      id: "price_ent",
      value: ""
    },
    {
      id: "categorie_slug",
      value: ""
    }
  ])
  const [sorting, setSorting] = useState([
    { id: 'createdAt', desc: true },
    { id: 'updatedAt', desc: true },
  ])

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 30,
  })

  // Función de filtro global personalizada
  const globalFilterFn = (row, columnId, filterValue) => {
    if (!filterValue) return true
    const value = filterValue.toLowerCase()
    const { name, slugs, brand } = row.original
    // Buscar en name
    if (name && name.toLowerCase().includes(value)) return true
    // Buscar en slugs (arreglo de strings)
    if (Array.isArray(slugs) && slugs.some(slug => slug.toLowerCase().includes(value))) return true
    // Buscar en brand
    if (brand && brand.toLowerCase().includes(value)) return true
    return false
  }

  const table = useReactTable({
    data: memoizedData,
    columns,
    filterFns: {},
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters,
      pagination,
      globalFilter: searchTerm,
      sorting,
    },
    globalFilterFn,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
  })


  const handleSearch = (value) => {
    const normalizedValue = value.replace(',', '.')
    setSearchTerm(value)
    table.setGlobalFilter(normalizedValue)
  }


  const handleEdit = (label, value, productId) => {
    let updatedProduct
    if (label === 'price_ent' || label === 'price') {
      updatedProduct = {
        [label]: value,
        currency: currency,
      }
    } else {
      updatedProduct = {
        [label]: value,
      }
    }
    if (value !== "") {
      patchProduct(productId, updatedProduct)
    }
  }

  return (
    <Card className="flex md:h-[88vh]">
      <FiltersTable
        categories={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
        currency={currency}
        config={config}
        isLoadingConfig={isLoadingConfig}
        showPriceEnt={showPriceEnt}
        setShowPriceEnt={setShowPriceEnt}
      />
      <CardContent className="w-full overflow-y-auto">
        <div className="gap-4 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 xl:grid-cols-4 transition-all duration-500">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <ProductCard key={row.original.id} product={row.original} handleEdit={handleEdit} showPriceEnt={showPriceEnt} />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center col-span-full w-[82vw] h-[80vh]">
              <h1 className="font-bold text-2xl text-center uppercase">
                No se encontraron productos
              </h1>
              <p>parece que con los filtros aplicados no hay resultados o han sido eliminados</p>
            </div>
          )}
        </div>
        <PaginationProducts table={table} />
      </CardContent>
    </Card>
  )
}
