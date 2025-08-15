import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { TagsInput } from '@/components/inputs/tagsInput';
import { Form } from '@/components/ui/form';
import { ChadCnFormInput } from '@/components/inputs/chadCnFormInput';
import { ChadCnFormSelect } from '@/components/inputs/chadCnFormSelect';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { CategoryDialog } from '@/components/dialogs/categoryDialog';
import { Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  watch,
}) => {
  const handleSetPrice = (percentage) => {
    const price_ent = form.watch('price_ent');
    const price = price_ent + (price_ent * percentage) / 100;
    form.setValue('price', price);
  };

  const badgeClass = `cursor-pointer rounded-full border transition-colors duration-200 border-slate-300 hover:text-white px-2 py-1 text-xs ${currency === 'BS' ? 'hover:bg-primary hover:border-primary' : 'hover:bg-usd hover:border-usd'}`;

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
          <div className="col-span-2 md:col-span-1 flex gap-2">
            <ChadCnFormInput
              control={form.control}
              name="stock"
              type="number"
              label="Stock"
              placeholder="Stock del producto"
            />
            <ChadCnFormInput
              control={form.control}
              name="low_stock"
              type="number"
              label="Poca existencia"
              placeholder="cantidad minima de productos"
            />
          </div>
          <ChadCnFormInput
            control={form.control}
            name="bundle"
            type="number"
            label="Cant x caja"
            placeholder="Cantidad por caja"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-full">
            <ChadCnFormInput
              control={form.control}
              name="image"
              type="url"
              label="Imágen"
              placeholder="URL de la imágen del producto"
            />
          </div>
          <div className="w-1/2">
            <ChadCnFormInput
              control={form.control}
              name="slug_url"
              type="text"
              label="URL del producto"
              placeholder="Ejm: harina-pan"
            />
          </div>
          <div className="flex w-32 flex-col items-start justify-center gap-2">
            <p>Buscar imágen</p>
            <Link
              className="cursor-pointer"
              size={15}
              onClick={() =>
                window.open(
                  `https://www.bing.com/images/search?q=${encodeURIComponent(
                    watch.name
                  )}`,
                  '_blank'
                )
              }
            >
              {watch.name.length > 0 &&
                (currency === 'BS' ? (
                  <Link2 className="text-primary" />
                ) : (
                  <Link2 className="text-usd" />
                ))}
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <ChadCnFormInput
              control={form.control}
              name="price_ent"
              type="number"
              step={0.01}
              label={`Precio de entrada por ${currency}`}
              min={0}
              placeholder="Ingrese el precio de entrada del producto"
            />
            <div
              className={`mt-2 flex items-center gap-1 transition-opacity duration-200 ${watch.price_ent > 0 ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className={badgeClass} onClick={() => handleSetPrice(5)}>
                5%
              </span>
              <span className={badgeClass} onClick={() => handleSetPrice(10)}>
                10%
              </span>
              <span className={badgeClass} onClick={() => handleSetPrice(20)}>
                20%
              </span>
              <span className={badgeClass} onClick={() => handleSetPrice(30)}>
                30%
              </span>
              <span className="text-xs font-bold">
                Establecer porcentaje de ganancia
              </span>
            </div>
          </div>
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

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 flex gap-2 md:col-span-1">
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
            <div className="flex w-1/2 flex-col items-center">
              <label
                htmlFor="unity"
                className="text-muted-foreground text-xs text-nowrap"
              >
                Vender por{' '}
                <span className="font-bold">{form.watch('unity')}</span>
              </label>
              <Switch
                className="mt-4 data-[state=unchecked]:bg-gray-300"
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
              <div className="flex gap-2">
                <div className="w-full">
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
                <div className="flex items-end">
                  <CategoryDialog />
                </div>
              </div>
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
          {product?.id ? 'Actualizar producto' : 'Crear producto'}
        </Button>
      </form>
    </Form>
  );
};
