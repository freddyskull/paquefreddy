import React, { useState } from 'react'
import Layout from '../layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useProductStore } from '@/store/productStore'
import { useCategoriesStore } from '@/store/categoriesStore'
import { LastProducts } from './lastProducts'
import { NoImageProduct } from './noImageProduct'
import { BoxIcon, HandCoins, ListCheck, TruckIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SlideProducts } from './slideProducts'
import { useRecordsStore } from '@/store/recordsStore'
import { Skeleton } from '@/components/ui/skeleton'

export const Home = () => {
  const { products, isLoading } = useProductStore()
  const { categories } = useCategoriesStore()
  const { records, totalRecordsCurrent, totalRecordsPrevious, totalRecordsLoading } = useRecordsStore()
  const currency = localStorage.getItem('currency')


  return (
    <Layout>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 w-full 2xl:w-[65%]">
          <div className="gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2 lg:col-span-1 bg-white dark:bg-secondary">
              <CardContent>
                <div className="flex 2xl:flex-row flex-col justify-center 2xl:justify-between items-center gap-2">
                  <div
                    className={`h-12 w-12 rounded-full p-3 ${currency === 'BS' ? 'bg-primary' : 'bg-usd'}`}
                  >
                    <BoxIcon className="text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="font-bold text-md uppercase">Productos</h2>
                    <Link
                      to="/productos"
                      className="text-foreground/50 hover:text-primary text-xs transition-colors duration-200"
                    >
                      Ver productos
                    </Link>
                  </div>
                  <span
                    className={`${currency === 'BS' ? 'text-primary' : 'text-usd'} text-4xl font-bold`}
                  >
                    {products.length}
                  </span>{' '}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2 lg:col-span-1 bg-white dark:bg-secondary">
              <CardContent>
                <div className="flex 2xl:flex-row flex-col justify-center 2xl:justify-between items-center gap-2">
                  <div
                    className={`h-12 w-12 rounded-full p-3 ${currency === 'BS' ? 'bg-primary' : 'bg-usd'}`}
                  >
                    <HandCoins className="text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="font-bold text-md uppercase">
                      Ventas del mes
                    </h2>
                    <Link
                      to="/ventas"
                      className="text-foreground/50 hover:text-primary text-xs transition-colors duration-200"
                    >
                      Ver ventas
                    </Link>
                  </div>
                  <span
                    className={`${currency === 'BS' ? 'text-primary' : 'text-usd'} text-4xl font-bold`}
                  >
                    {
                      totalRecordsLoading ? (
                        <Skeleton className="w-15 h-12" />
                      ) : (
                        totalRecordsCurrent.count
                      )
                    }
                  </span>{' '}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2 lg:col-span-1 bg-white dark:bg-secondary">
              <CardContent>
                <div className="flex 2xl:flex-row flex-col justify-center 2xl:justify-between items-center gap-2">
                  <div
                    className={`h-12 w-12 rounded-full p-3 ${currency === 'BS' ? 'bg-primary' : 'bg-usd'}`}
                  >
                    <HandCoins className="text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="font-bold text-md uppercase">
                      Mes anterior
                    </h2>
                    <Link
                      to="/ventas"
                      className="text-foreground/50 hover:text-primary text-xs transition-colors duration-200"
                    >
                      Ver ventas
                    </Link>
                  </div>
                  <span
                    className={`${currency === 'BS' ? 'text-primary' : 'text-usd'} text-4xl font-bold`}
                  >

                    {
                      totalRecordsLoading ? (
                        <Skeleton className="w-15 h-12" />
                      ) : (
                        totalRecordsPrevious.count
                      )
                    }
                  </span>{' '}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="">
            <SlideProducts products={products} isLoading={isLoading} />
          </div>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-8 xl:mb-0">
            <LastProducts products={products} />
            <NoImageProduct products={products} />
          </div>
        </div>
        <div className="hidden 2xl:flex flex-col gap-4 2xl:w-[35%]">
          <Card className="bg-white dark:bg-secondary h-[61.5vh]">
            <CardHeader>
              <CardTitle className="font-bold text-2xl uppercase">
                Proveedores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                repellat quod iste aperiam? Culpa corrupti, deleniti, optio
                reiciendis soluta doloremque magnam ut mollitia sed praesentium
                distinctio hic quidem inventore suscipit? Iste cupiditate saepe
                mollitia amet? Quasi unde sed inventore neque fugit, iste
                molestiae maxime dolorem earum voluptates? Error exercitationem
                mollitia amet? Quasi unde sed inventore neque fugit, iste
                molestiae maxime dolorem earum voluptates? Error exercitationem
                nulla, dolore quasi quos ducimus totam ullam iusto maxime? Quos,
                iure! Asperiores numquam eligendi distinctio similique magnam.
                Ipsa deserunt, vero fuga, eveniet veniam tempora cum velit
                tenetur, assumenda vel sit accusantium! Assumenda aut quas est
                consequuntur. Natus nobis impedit cumque debitis. Aliquid earum,
                doloremque provident perferendis aperiam, placeat non quidem
                iste quas eum, et nulla inventore cupiditate voluptas molestiae
                tenetur expedita ea sapiente.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-row flex-wrap bg-white dark:bg-secondary h-[27vh] overflow-x-hidden overflow-y-auto">
            <CardHeader>
              <CardTitle className="font-bold text-2xl uppercase">
                Proveedores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                repellat quod iste aperiam? Culpa corrupti, deleniti, optio
                reiciendis soluta doloremque magnam ut mollitia sed praesentium
                distinctio hic quidem inventore suscipit? Iste cupiditate saepe
                mollitia amet? Quasi unde sed inventore neque fugit, iste
                molestiae maxime dolorem earum voluptates? Error exercitationem
                doloremque ut dolorum? Reiciendis necessitatibus totam corrupti
                nisi ducimus? Magni, veritatis? Ratione dolorum
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
