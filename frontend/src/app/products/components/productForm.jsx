import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { TagsInput } from '@/components/inputs/tagsInput'
import { Form } from '@/components/ui/form'
import { ChadCnFormInput } from '@/components/inputs/chadCnFormInput'
import { ChadCnFormSelect } from '@/components/inputs/chadCnFormSelect'
import { Button } from '@/components/ui/button'
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
  currency,
  product,
}) => {
  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
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

        <div className="gap-4 grid grid-cols-2">
          <ChadCnFormInput
            control={form.control}
            name="price_ent"
            type="number"
            step={0.01}
            label={`Precio de entrada por ${currency}`}
            min={0}
            placeholder="Ingrese el precio de entrada del producto"
          />
          <ChadCnFormInput
            control={form.control}
            name="price"
            type="number"
            step={0.01}
            label={`Precio de venta por ${currency}`}
            min={0}
            placeholder="Ingrese el precio del producto"
          />
        </div>

        <div className="gap-4 grid grid-cols-3">
          <div className="flex gap-2 col-span-3 md:col-span-1">
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
            <div className="flex flex-col items-center w-1/2">
              <label htmlFor="unity" className="text-muted-foreground text-xs text-nowrap">
                Vender por <span className="font-bold">{form.watch('unity')}</span>
              </label>
              <Switch
                className="data-[state=unchecked]:bg-gray-300 mt-4"
                id="unity"
                checked={form.watch('sell_unity')}
                onCheckedChange={(value) => {
                  form.setValue('sell_unity', value)
                }}
              />
            </div>
          </div>

          {isLoadingCategories ? (
            <div className="flex flex-col justify-center col-span-3 md:col-span-1 h-full">
              <Skeleton className="rounded-md w-12 h-[10px]" />
              <Skeleton className="mt-2 rounded-md w-full h-[35px]" />
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
            <div className="flex flex-col justify-center col-span-3 md:col-span-1 h-full">
              <Skeleton className="rounded-md w-12 h-[10px]" />
              <Skeleton className="mt-2 rounded-md w-full h-[35px]" />
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
        <div className="gap-4 grid grid-cols-2">
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
          {product?.id ? 'Actualizar producto' : 'Crear producto'}
        </Button>
      </form>
    </Form>
  )
}
