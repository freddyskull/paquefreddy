import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProductCard from '@/components/cardProducts';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const SlideProducts = ({ products }) => {

    const autoplay = new Autoplay({ delay: 2000 })

  return (
    <Card className="bg-white dark:bg-secondary">
      <CardContent>
        <div className="flex gap-24 items-center justify-center xl:justify-between">
          <div className='xl:ml-6 w-[50%] hidden md:block'>
            <h2 className="xl:text-4xl text-2xl font-bold uppercase">Ultimos productos agregados</h2>
            <p className="text-foreground text-md! mt-4 hidden xl:block">
            En esta sección se muestran los <b>últimos 5 productos</b> que se han agregado mas recientemente al stock, si deseas ver todos los productos puedes ir a la sección de productos, donde podras buscar y filtrar todos los productos.
            </p>
            {/* <div className="flex items-center gap-2 mt-4">
              <span className="text-xs text-primary/80 uppercase mt-2">El ultimo producto fue agregado el {new Intl.DateTimeFormat('es-AR', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(products[0].createdAt))}</span>
            </div> */}
            
            <Link to="/productos" className="mt-6">
              <Button className="mt-6 uppercase" size="lg">Ver todos</Button>
            </Link>
          </div>
          <Carousel className="mr-12 w-full max-w-xs" plugins={[autoplay]}>
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
        </div>
      </CardContent>
    </Card>
  );
};
