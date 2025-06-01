import React, { useState, useMemo } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/cardProducts"
import { useConfigStore } from '@/store/configStore'
import { useCategoriesStore } from '@/store/categoriesStore'
import { useProductStore } from '@/store/productStore'
import { FiltersTable } from '@/components/dataTable/products/filtersTable'

export const ProductsDataTable = ({ data }) => {
  const { categories } = useCategoriesStore()
  const { patchProduct } = useProductStore()

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
  ], [])

  const memoizedData = useMemo(() => data.slice(0, 30), [data])
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

  const table = useReactTable({
    data: memoizedData,
    columns,
    filterFns: {},
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
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
    <Card className="h-[88vh]">
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
      />
      <CardContent className="h-full overflow-y-auto">
        <div className="gap-4 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 xl:grid-cols-4 transition-all duration-500">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <ProductCard key={row.original.id} product={row.original} handleEdit={handleEdit} />
            ))
          ) : (
            <div className="flex justify-center items-center col-span-full w-full h-[80vh]">
              <h1 className="font-bold text-2xl text-center uppercase">
                No hay productos disponibles
              </h1>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
