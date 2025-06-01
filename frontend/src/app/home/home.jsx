import React from 'react';
import Layout from '../layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProductStore } from '@/store/productStore';
import { LastProducts } from './lastProducts';
import { NoImageProduct } from './noImageProduct';

export const Home = () => {
    const { products } = useProductStore()

  return (
    <Layout>
      <div className="flex gap-8 px-4 mt-4">
        <div className="w-[65%] flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold uppercase">
                  Productos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  eum doloribus nesciunt nihil accusamus maxime rem quis
                  obcaecati quo ratione saepe sit in dolore porro, ullam,
                  consequatur fugiat? Corporis,
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold uppercase">
                  Categorías
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  eum doloribus nesciunt nihil accusamus maxime rem quis
                  obcaecati quo ratione saepe sit in dolore porro, ullam,
                  consequatur fugiat? Corporis,
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  eum doloribus nesciunt nihil accusamus maxime rem quis
                  obcaecati quo ratione saepe sit in dolore porro, ullam,
                  consequatur fugiat? Corporis,
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold uppercase">
                  Proveedores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum perspiciatis quae a neque quis, beatae vitae at qui nulla ratione, officia illo! Natus mollitia deleniti sit. Quaerat dolore explicabo necessitatibus.
                  Deserunt corrupti eius dolor veritatis necessitatibus, dicta voluptatibus velit enim temporibus quibusdam tempore, architecto dolorum libero aut doloremque odit excepturi dignissimos rerum dolore soluta iste dolorem aliquam atque maiores? Sit.
                  Dicta quos consequatur suscipit blanditiis dolorum sit voluptate magnam voluptatum ut modi minus explicabo quia nesciunt eos voluptatibus natus, error similique corporis pariatur quisquam molestias laboriosam itaque. Eos, voluptatibus tempora.
                  
                  Nihil culpa delectus nulla accusamus quod quam animi vel quidem sapiente? Iusto ipsum iste distinctio hic, culpa numquam perferendis quas eligendi dolore quisquam id animi libero cupiditate sequi impedit doloribus!
                  natus, error similique corporis pariatur quisquam molestias laboriosam itaque. Eos, voluptatibus tempora.
                  Tempora tenetur repellat harum aut laudantium magnam, nesciunt, officiis velit voluptatum omnis recusandae voluptates facilis accusantium quisquam! Labore, provident non mollitia voluptatem ex neque saepe laborum, eaque, magnam reprehenderit cum?
                  Nihil culpa delectus nulla accusamus quod quam animi vel quidem sapiente? Iusto ipsum iste distinctio hic, culpa numquam perferendis quas eligendi dolore quisquam id animi libero cupiditate sequi impedit doloribus!
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <LastProducts products={products}/>
            <NoImageProduct products={products}/>
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold uppercase">
                Proveedores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellat quod iste aperiam? Culpa corrupti, deleniti, optio reiciendis soluta doloremque magnam ut mollitia sed praesentium distinctio hic quidem inventore suscipit?
                Iste cupiditate saepe mollitia amet? Quasi unde sed inventore neque fugit, iste molestiae maxime dolorem earum voluptates? Error exercitationem doloremque ut dolorum? Reiciendis necessitatibus totam corrupti nisi ducimus? Magni, veritatis?
                Ratione dolorum, praesentium reiciendis aliquid eaque ipsa, aperiam corrupti recusandae asperiores quod numquam dolor omnis rerum facere! Laborum, veritatis debitis! Iusto officia deserunt magnam dolorum ipsa, quod facilis ullam nobis!
                Numquam debitis minima reiciendis expedita impedit consequuntur maiores et nesciunt quae aspernatur assumenda laborum eveniet, non pariatur unde ducimus explicabo facere. Fuga quos necessitatibus perferendis numquam commodi deserunt maiores expedita!
                Quo odio vel error laborum aliquam esse accusantium cupiditate temporibus ut aliquid expedita, perspiciatis, pariatur sequi maiores ipsum rerum nulla, dolore quasi quos ducimus totam ullam iusto maxime? Quos, iure!
                Asperiores numquam eligendi distinctio similique magnam. Ipsa deserunt, vero fuga, eveniet veniam tempora cum velit tenetur, assumenda vel sit accusantium! Assumenda aut quas est consequuntur. Natus nobis impedit cumque debitis.
                Aliquid earum, doloremque provident perferendis aperiam, placeat non quidem iste quas eum, et nulla inventore cupiditate voluptas molestiae tenetur expedita ea sapiente.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellat quod iste aperiam? Culpa corrupti, deleniti, optio reiciendis soluta doloremque magnam ut mollitia sed praesentium distinctio hic quidem inventore suscipit?
                Iste cupiditate saepe mollitia amet? Quasi unde sed inventore neque fugit, iste molestiae maxime dolorem earum voluptates? Error exercitationem doloremque ut dolorum? Reiciendis necessitatibus totam corrupti nisi ducimus? Magni, veritatis?
                Ratione dolorum
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
