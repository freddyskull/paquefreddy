import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { TagsInput } from '@/components/inputs/tagsInput';
import { Form } from '@/components/ui/form';
import { ChadCnFormInput } from '@/components/inputs/chadCnFormInput';
import { ChadCnFormSelect } from '@/components/inputs/chadCnFormSelect';
import { Button } from '@/components/ui/button';
import { Switch } from "@/components/ui/switch"

export const ProductForm = ({
  form,
  onSubmit,
  optionsCategories,
  optionsSuppliers,
  defaultCategoryId,
  slugs,
  setSlugs,
  isLoadingCategories,
  isLoadingSuppliers,
}) => {
  const currency = localStorage.getItem('currency');
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          name="image"
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

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-1 flex gap-2">
            <div className="w-full">
              <ChadCnFormSelect
                control={form.control}
                name="unity"
                options={[
                  { value: 'und', label: 'Unidad' },
                  { value: 'pqt', label: 'Paquete' },
                  { value: 'kg', label: 'Kilogramo' },
                  { value: 'gr', label: 'Gramo' },
                  { value: 'lt', label: 'Litro' },
                ]}
                defaultValue="und"
                label="Unidad"
                placeholder="Ingrese la unidad del producto"
              />
            </div>
            <div className="w-1/4 flex flex-col items-center">
              <label htmlFor="unity" className="text-xs text-muted-foreground text-nowrap">
                Vender por <span className="font-bold">{form.watch('unity')}</span>
              </label>
              <Switch
                className="mt-4"
                id="unity"
                checked={form.watch('sell_unity')}
                onCheckedChange={(value) => {
                  form.setValue('sell_unity', value);
                }}
              />
            </div>
          </div>

          {isLoadingCategories ? (
            <div className="col-span-3 flex h-full flex-col justify-center md:col-span-1">
              <Skeleton className="h-[10px] w-12 rounded-md" />
              <Skeleton className="mt-2 h-[35px] w-full rounded-md" />
            </div>
          ) : (
            <div className="col-span-3 md:col-span-1">
              <ChadCnFormSelect
                control={form.control}
                name="categorie_id"
                options={optionsCategories}
                type="number"
                label="Categoria"
                defaultValue={defaultCategoryId}
                placeholder="Ingrese la categoria del producto"
              />
            </div>
          )}

          {isLoadingSuppliers ? (
            <div className="col-span-3 flex h-full flex-col justify-center md:col-span-1">
              <Skeleton className="h-[10px] w-12 rounded-md" />
              <Skeleton className="mt-2 h-[35px] w-full rounded-md" />
            </div>
          ) : (
            <div className="col-span-3 md:col-span-1">
              <ChadCnFormSelect
                control={form.control}
                name="supplier_id"
                options={optionsSuppliers}
                type="number"
                label="Proveedor"
                placeholder="Ingrese el proveedor del producto"
              />
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
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
          <div className="mt-1">
            <TagsInput
              name="slugs"
              control={form.control}
              slugs={slugs}
              setSlugs={setSlugs}
              placeholder="Sirven para buscar el producto"
            />
          </div>
        </div>
        <Button
          type="submit"
          className={`w-full uppercase ${currency === 'BS' ? 'bg-primary' : 'bg-usd hover:bg-usd/80'}`}
        >
          Crear producto
        </Button>
      </form>
    </Form>
  );
};
