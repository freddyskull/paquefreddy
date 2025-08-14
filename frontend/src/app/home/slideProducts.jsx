import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ProductCard from '@/components/cardProducts'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useConfigStore } from '@/store/configStore'
import { Spinner } from '@/components/ui/shadcn-io/spinner';

export const SlideProducts = ({ products, isLoading }) => {

  const autoplay = new Autoplay({ delay: 2000 })
  const { currency } = useConfigStore()

  return (
    <Card className="bg-white dark:bg-secondary py-6 xl:py-2">
      <CardContent>
        <div className="flex justify-center xl:justify-between items-center gap-24">
          <div className="hidden md:block xl:ml-6 2xl:w-[50%]">
            <h2 className="font-bold text-2xl xl:text-4xl uppercase">
              Ultimos productos agregados
            </h2>
            <p className="hidden md:block mt-4 text-foreground text-md!">
              En esta sección se muestran los <b>últimos 5 productos</b> que se
              han agregado mas recientemente al stock, si deseas ver todos los
              productos puedes ir a la sección de productos, donde podras buscar
              y filtrar todos los productos.
            </p>

            <Link to="/productos" className="mt-6">
              <Button
                className={`${currency === 'BS' ? 'bg-primary hover:bg-primary/90' : 'bg-usd hover:bg-usd/90'} mt-6 uppercase`}
                size="lg"
              >
                Ver todos
              </Button>
            </Link>
          </div>
          {
            !isLoading ? (
              <Carousel className="2xl:mr-12 w-[40%] max-w-xs" plugins={[autoplay]}>
                <CarouselContent>
                  {products.slice(0, 5).map((product) => (
                    <CarouselItem key={product.id}>
                      <ProductCard product={product} />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="hidden 2xl:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>

              </Carousel>
            ) : (

              <div className="flex justify-center items-center w-[140%] max-w-xs h-[47.6vh] bg-accent/20 rounded-md">
                <Spinner variant="ring" size={120} className="text-primary" />
              </div>
            )
          }


        </div>
      </CardContent>
    </Card>
  )
}
