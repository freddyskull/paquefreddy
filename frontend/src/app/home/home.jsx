import React from 'react';
import Layout from '../layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProductStore } from '@/store/productStore';
import { useCategoriesStore } from '@/store/categoriesStore';
import { LastProducts } from './lastProducts';
import { NoImageProduct } from './noImageProduct';
import { BoxIcon, ListCheck, TruckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SlideProducts } from './slideProducts';

export const Home = () => {
  const { products } = useProductStore();
  const { categories } = useCategoriesStore();
  const currency = localStorage.getItem('currency');

  return (
    <Layout>
      <div className="flex gap-8 px-4 overflow-y-auto">
        <div className="flex w-full flex-col gap-8 2xl:w-[65%]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2 lg:col-span-1">
              <CardContent>
                <div className="flex flex-col items-center justify-center gap-2 2xl:flex-row 2xl:justify-between">
                  <div
                    className={`h-12 w-12 rounded-full p-3 ${currency === 'BS' ? 'bg-primary' : 'bg-usd'}`}
                  >
                    <BoxIcon className="text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-md font-bold uppercase">Productos</h2>
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
            <Card className="col-span-2 lg:col-span-1">
              <CardContent>
                <div className="flex flex-col items-center justify-center gap-2 2xl:flex-row 2xl:justify-between">
                  <div
                    className={`h-12 w-12 rounded-full p-3 ${currency === 'BS' ? 'bg-primary' : 'bg-usd'}`}
                  >
                    <ListCheck className="text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-md font-bold uppercase">Categorías</h2>
                    <Link
                      to="/categorias"
                      className="text-foreground/50 hover:text-primary text-xs transition-colors duration-200"
                    >
                      Ver categorías
                    </Link>
                  </div>
                  <span
                    className={`${currency === 'BS' ? 'text-primary' : 'text-usd'} text-4xl font-bold`}
                  >
                    {categories.length}
                  </span>{' '}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2 lg:col-span-1">
              <CardContent>
                <div className="flex flex-col items-center justify-center gap-2 2xl:flex-row 2xl:justify-between">
                  <div
                    className={`h-12 w-12 rounded-full p-3 ${currency === 'BS' ? 'bg-primary' : 'bg-usd'}`}
                  >
                    <TruckIcon className="text-white" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="text-md font-bold uppercase">Proveedores</h2>
                    <Link
                      to="/proveedores"
                      className="text-foreground/50 hover:text-primary text-xs transition-colors duration-200"
                    >
                      Ver proveedores
                    </Link>
                  </div>
                  <span
                    className={`${currency === 'BS' ? 'text-primary' : 'text-usd'} text-4xl font-bold`}
                  >
                    {categories.length}
                  </span>{' '}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <SlideProducts products={products} />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <LastProducts products={products} />
            <NoImageProduct products={products} />
          </div>
        </div>
        <div className="hidden flex-col gap-8 2xl:flex 2xl:w-[35%]">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold uppercase">
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
                nisi ducimus? Magni, veritatis? Ratione dolorum, praesentium
                reiciendis aliquid eaque ipsa, aperiam corrupti recusandae
                asperiores quod numquam dolor omnis rerum facere! Laborum,
                veritatis debitis! Iusto officia deserunt magnam dolorum ipsa,
                quod facilis ullam nobis! Numquam debitis minima reiciendis
                expedita impedit consequuntur maiores et nesciunt quae
                aspernatur assumenda laborum eveniet, non pariatur unde ducimus
                explicabo facere. Fuga quos necessitatibus perferendis numquam
                commodi deserunt maiores expedita! Quo odio vel error laborum
                aliquam esse accusantium cupiditate temporibus ut aliquid
                expedita, perspiciatis, pariatur sequi maiores ipsum rerum
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
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold uppercase">
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
  );
};
