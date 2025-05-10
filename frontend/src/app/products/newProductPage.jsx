import React, { useEffect, useState } from 'react';
import Layout from '../layout';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { ChadCnFormInput } from '@/components/inputs/chadCnFormInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { ChadCnFormSelect } from '@/components/inputs/chadCnFormSelect';
import { useCategoriesStore } from '@/store/categoriesStore';
import { useConfigStore } from '@/store/configStore';
import { Skeleton } from '@/components/ui/skeleton';
import { TagsInput } from '@/components/inputs/tagsInput';
import { DateBadge } from '@/components/dataTable/products/dateBadge';
import defaultImage from '/default-img.jpg';
const productSchema = z
  .object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    stock: z.number().min(0, 'El stock debe ser mayor o igual a 0'),
    status: z.boolean().optional(),
    price: z.number().min(0, 'El precio debe ser mayor o igual a 0'),
    price_ent: z
      .number()
      .min(0, 'El precio de entrada debe ser mayor o igual a 0'),
    slugs: z.array(z.string()).default(null),
    images: z.string().optional(),
    brand: z.string().optional(),
    bundle: z.number().optional(),
    expiration: z.string().optional(),
    unity: z.string().optional(),
    supplier_id: z.number().optional(),
    categorie_id: z.number().optional(),
  })
  .refine((data) => data.price > data.price_ent, {
    message: 'El precio de venta debe ser mayor al precio de entrada',
    path: ['price'],
  });

export const NewProductPage = () => {
  const { categories, isLoading } = useCategoriesStore();
  const { config } = useConfigStore();
  const [slugs, setSlugs] = useState([]);
  const defaultCategory = categories.find(
    (category) => category.slug_url === config.default_categories_slug
  );
  const defaultCategoryId = defaultCategory?.id;
  const optionsCategories = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const form = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      stock: 0,
      status: true,
      price: 0,
      price_ent: 0,
      slugs: [],
      images: '',
      brand: '',
      bundle: 0,
      expiration: '',
      unity: 'unidad',
      supplier_id: undefined,
      categorie_id: defaultCategoryId ?? optionsCategories[0]?.value,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const product = form.watch();
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle className="text-center font-bold uppercase md:text-left md:text-2xl">
            Crear Nuevo Producto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <ChadCnFormInput
                      control={form.control}
                      name="name"
                      ClassName="col-span-2 md:col-span-1"
                      label="Nombre"
                      placeholder="Nombre del producto"
                    />
                    <ChadCnFormInput
                      control={form.control}
                      name="stock"
                      type="number"
                      label="Stock"
                      placeholder="Stock del producto"
                    />
                    <ChadCnFormInput
                      control={form.control}
                      name="bundle"
                      type="number"
                      label="Cant x caja"
                      placeholder="Cantidad por caja"
                    />
                  </div>

                  <ChadCnFormInput
                    control={form.control}
                    name="images"
                    type="url"
                    label="Imágen"
                    placeholder="URL de la imágen del producto"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <ChadCnFormInput
                      control={form.control}
                      name="price_ent"
                      type="number"
                      label={`Precio de entrada por ${form.watch('unity')}`}
                      min={0}
                      placeholder="Ingrese el precio de entrada del producto"
                    />
                    <ChadCnFormInput
                      control={form.control}
                      name="price"
                      type="number"
                      label={`Precio de venta por ${form.watch('unity')}`}
                      min={0}
                      placeholder="Ingrese el precio del producto"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <ChadCnFormSelect
                      control={form.control}
                      name="unity"
                      options={[
                        { value: 'unidad', label: 'Unidad' },
                        { value: 'paquete', label: 'Paquete' },
                        { value: 'kilogramo', label: 'Kilogramo' },
                        { value: 'gramo', label: 'Gramo' },
                        { value: 'litro', label: 'Litro' },
                      ]}
                      defaultValue="unidad"
                      label="Unidad"
                      placeholder="Ingrese la unidad del producto"
                    />

                    {isLoading ? (
                      <div className="flex h-full flex-col justify-center">
                        <Skeleton className="h-[10px] w-12 rounded-md" />
                        <Skeleton className="mt-2 h-[35px] w-full rounded-md" />
                      </div>
                    ) : (
                      <ChadCnFormSelect
                        control={form.control}
                        name="categorie_id"
                        options={optionsCategories}
                        type="number"
                        label="Categoria"
                        defaultValue={defaultCategoryId}
                        placeholder="Ingrese la categoria del producto"
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <ChadCnFormInput
                      control={form.control}
                      ClassName="col-span-2 md:col-span-1"
                      type="date"
                      name="expiration"
                      label="Fecha de expiracion"
                      placeholder="Fecha de expiracion"
                    />

                    <ChadCnFormInput
                      control={form.control}
                      name="brand"
                      label="Marca"
                      placeholder="Marca del producto"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Palabras clave
                    </label>
                    <div className="mt-1">
                      <TagsInput
                        slugs={slugs}
                        setSlugs={setSlugs}
                        placeholder="Sirven para buscar el producto"
                      />
                    </div>
                  </div>
                  <Button type="submit">Crear</Button>
                </form>
              </Form>
            </div>
            <div className="hidden md:flex items-center flex-col md:w-[40%] 2xl:w-1/4 ">
            <h2 className="text-center text-2xl font-bold uppercase mb-4">Previsualizacion</h2>  
              <Card
                id="card-product"
                className="dark:bg-secondary w-full hover:shadow-primary/10 product-card relative flex min-h-[440px] flex-col bg-white p-4 transition-shadow duration-500 hover:shadow-2xl"
              >
                <DateBadge date={new Date().toISOString()} />
                <div
                  className="image relative flex h-48 w-full items-center justify-center rounded-md bg-white bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${product.images.length <= 3 ? defaultImage : product.images})` }}
                ></div>
                <div className="flex justify-center gap-2 text-center">
                  <span className="text-muted-foreground -mb-4 line-clamp-1 text-[8px] uppercase">
                    {product.slugs.slice(0, 3).join(', ')}
                  </span>
                </div>
                <div className="flex justify-center gap-2 text-center">
                  <div className="flex flex-col text-center">
                    <span className="text-2xl font-bold">
                      {product.price} 
                    </span>
                    <span className="text-muted-foreground text-[8px]">
                      {product.brand}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};
