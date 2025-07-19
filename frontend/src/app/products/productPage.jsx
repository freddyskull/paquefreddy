import React, { useMemo } from 'react'
import { useProductStore } from '@/store/productStore'
import { ProductsDataTable } from '@/components/dataTable/products/productsDataTable'
import Layout from '../layout'
export const ProductPage = () => {
  const { products, isLoading } = useProductStore()

  const memoizedProducts = useMemo(() => products, [products])
  return (
    <>
      <Layout>
        {!isLoading ? (
          <ProductsDataTable data={memoizedProducts} />
        ) : (
          <div className="flex justify-center items-center col-span-full w-[82vw] h-[80vh]">
            <h1 className="font-bold text-2xl text-center uppercase">
              Cargando productos...
            </h1>
          </div>
        )}
      </Layout>
    </>
  )
}
