import React from 'react'
import { useProductStore } from '@/store/productStore'
import { ProductsDataTable } from '@/components/dataTable/productsDataTable'

export const ProductPage = () => {
  const { products } = useProductStore()

  return (
    <>
      <ProductsDataTable data={products} />
    </>
  )
}
