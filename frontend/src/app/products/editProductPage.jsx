import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NewProductPage } from './newProductPage';
import { useProductStore } from '@/store/productStore';
import Layout from '../layout';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, SearchX } from 'lucide-react';

export const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { fetchProduct } = useProductStore();
  useEffect(() => {
    async function getProduct() {
      const product = await fetchProduct(id);
      setProduct(product);
    }
    getProduct();
  }, [fetchProduct, id]);

  return (
    <>
      {product ? (
        <NewProductPage product={product} />
      ) : (
        <Layout>
          <Card>
            <CardContent>
              {product !== undefined ? (
                <div className="flex gap-4">
                  <div className="w-full">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-[10px] w-1/2 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-[10px] w-1/2 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                      <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
                        <Skeleton className="h-[10px] w-1/2 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                    </div>
                    <div className="mt-12 w-full">
                      <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
                        <Skeleton className="h-[10px] w-1/2 rounded-full md:w-1/6" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-[10px] w-1/3 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-[10px] w-1/3 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-[10px] w-1/2 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-[10px] w-1/2 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                      <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
                        <Skeleton className="h-[10px] w-1/2 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                    </div>
                    <div className="mt-14 grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-[10px] w-1/3 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-[10px] w-1/3 rounded-full" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                    </div>
                    <div className="mt-14 w-full">
                      <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
                        <Skeleton className="h-[10px] w-1/2 rounded-full md:w-1/6" />
                        <Skeleton className="h-[20px] w-full rounded-full" />
                      </div>
                    </div>
                    <div className="mt-14 w-full">
                      <Skeleton className="h-[40px] w-full rounded-md" />
                    </div>
                  </div>

                  <div className="hidden flex-col items-center md:w-[40%] xl:flex 2xl:w-1/4">
                    <Skeleton className="mt-4 mb-4 h-[30px] w-3/4 rounded-md" />
                    <Skeleton className="h-[400px] w-full rounded-md" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-[55vh] flex-col gap-4">
                  <SearchX className="h-16 w-16 text-foreground/20" />
                  <div className="text-center">
                    <h1 className="text-2xl font-bold uppercase">Producto no encontrado</h1>
                    <p className="text-sm text-foreground/50 mt-2">El producto que intentas editar no se encuentra</p>
                    <Link to="/productos" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase">
                      <ArrowLeft className="h-4 w-4" />
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
  );
};
