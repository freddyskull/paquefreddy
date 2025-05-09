import React, { useMemo } from 'react'
import { useProductStore } from '@/store/productStore'
import { ProductsDataTable } from '@/components/dataTable/productsDataTable'

export const ProductPage = () => {
  const { products } = useProductStore()

  const memoizedProducts = useMemo(() => products, [products])

  return (
    <>
      <ProductsDataTable data={memoizedProducts} />
    </>
  )
}
