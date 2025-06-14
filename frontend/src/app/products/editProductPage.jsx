import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NewProductPage } from './newProductPage'
import { useProductStore } from '@/store/productStore'
import Layout from '../layout'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeft, SearchX } from 'lucide-react'

export const EditProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { fetchProduct } = useProductStore()
  useEffect(() => {
    async function getProduct() {
      const product = await fetchProduct(id)
      setProduct(product)
    }
    getProduct()
  }, [fetchProduct, id])

  return (
    <>
      {product ? (
        <NewProductPage product={product} />
      ) : (
        <Layout>
          <Card className={"w-full h-[72vh]"}>
            <CardContent>
              {product !== undefined ? (
                <div className="flex gap-4">
                  <div className="w-full">
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
                      <div className="flex flex-col gap-2">
                        <Skeleton className="rounded-full w-1/2 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="rounded-full w-1/2 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                        <Skeleton className="rounded-full w-1/2 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                    </div>
                    <div className="mt-12 w-full">
                      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                        <Skeleton className="rounded-full w-1/2 md:w-1/6 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                    </div>
                    <div className="gap-4 grid grid-cols-2 mt-12">
                      <div className="flex flex-col gap-2">
                        <Skeleton className="rounded-full w-1/3 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="rounded-full w-1/3 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                    </div>
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 mt-12">
                      <div className="flex flex-col gap-2">
                        <Skeleton className="rounded-full w-1/2 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="rounded-full w-1/2 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                        <Skeleton className="rounded-full w-1/2 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                    </div>
                    <div className="gap-4 grid grid-cols-2 mt-14">
                      <div className="flex flex-col gap-2">
                        <Skeleton className="rounded-full w-1/3 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="rounded-full w-1/3 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                    </div>
                    <div className="mt-14 w-full">
                      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                        <Skeleton className="rounded-full w-1/2 md:w-1/6 h-[10px]" />
                        <Skeleton className="rounded-full w-full h-[20px]" />
                      </div>
                    </div>
                    <div className="mt-14 w-full">
                      <Skeleton className="rounded-md w-full h-[40px]" />
                    </div>
                  </div>

                  <div className="hidden xl:flex flex-col items-center md:w-[40%] 2xl:w-1/4">
                    <Skeleton className="mt-4 mb-4 rounded-md w-3/4 h-[30px]" />
                    <Skeleton className="rounded-md w-full h-[400px]" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-4 h-[55vh]">
                  <SearchX className="w-16 h-16 text-foreground/20" />
                  <div className="text-center">
                    <h1 className="font-bold text-2xl uppercase">Producto no encontrado</h1>
                    <p className="mt-2 text-foreground/50 text-sm">El producto que intentas editar no se encuentra</p>
                    <Link to="/productos" className="inline-flex items-center gap-2 mt-6 font-bold text-sm uppercase">
                      <ArrowLeft className="w-4 h-4" />
                      Volver a productos
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </Layout>
      )}
    </>
  )
}
