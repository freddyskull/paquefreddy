import React, { useMemo } from 'react'
import { useProductStore } from '@/store/productStore'
import { ProductsDataTable } from '@/components/dataTable/products/productsDataTable'
import Layout from '../layout'
export const ProductPage = () => {
  const { products } = useProductStore()

  const memoizedProducts = useMemo(() => products, [products])
  return (
    <>
      <Layout>
        <ProductsDataTable data={memoizedProducts} />
      </Layout>
    </>
  )
}
