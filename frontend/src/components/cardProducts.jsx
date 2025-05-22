import React, { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { DateBadge } from '@/components/dataTable/products/dateBadge';
import { useConfigStore } from '@/store/configStore';
import { useCategoriesStore } from '@/store/categoriesStore';
import { EditableInput } from '@/components/inputs/EditableInput';
import { EditableSelect } from '@/components/inputs/EditableSelect';
import { formatPrice } from '@/utils/format';
import { Button } from './ui/button';
import { Calculator, Pencil, Trash } from 'lucide-react';
import { useProductStore } from '@/store/productStore';
import { ConfirmationDialog } from '@/components/dialog/ConfirmationDialog';
import { Link } from 'react-router-dom';
import { UnityBadge } from '@/components/dataTable/products/unityBadge';

export const ProductCard = ({ product, handleEdit }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const { categories } = useCategoriesStore();
  const { config, currency } = useConfigStore();
  const { deleteProduct } = useProductStore();
  const roundPrice = config?.roundPrice;
  const categoryOptions = useMemo(
    () =>
      categories.map((cat) => ({
        value: cat.id,
        label: cat.name,
      })),
    [categories]
  );

  const handleDeleteConfirmation = (confirmed) => {
    setIsConfirmDialogOpen(false);
    if (confirmed) {
      setIsDeleting(true);
      deleteProduct(product.id);
    }
  };

  const onDeleteClick = () => {
    setIsConfirmDialogOpen(true);
  };

  return (
    <Card
      key={product.id}
      id="card-product"
      className={`group dark:bg-secondary hover:shadow-primary/10 product-card relative flex min-h-[440px] flex-col bg-white p-4 transition-opacity duration-400 hover:shadow-2xl ${isDeleting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
    >
      <div className="absolute top-5 left-0 flex w-full justify-between gap-2 px-1">
        <DateBadge date={product.createdAt} />
        <span className="mr-2 -mt-1 z-10">
          <UnityBadge unity={product.unity} />
        </span>
      </div>
      <div
        className="image relative flex h-48 w-full items-center justify-center rounded-md bg-white bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div
          className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          id="card-acctions"
        >
          <div className="flex w-3/4 items-center justify-center gap-4 rounded-sm bg-black/20 p-2">
            <div>
              <Link to={`/productos/editar/${product.slugs_url}`}>
                <Button variant="outline" className="h-8 w-8">
                  <Pencil className="text-grey-300" />
                </Button>
              </Link>
            </div>
            <div>
              <Button
                variant="outline"
                className="h-8 w-8"
                onClick={onDeleteClick}
              >
                <Trash className="text-grey-300" />
              </Button>
            </div>
            <div>
              <Button variant="outline" className="h-8 w-8">
                <Calculator className="text-grey-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmationDialog
        isOpen={isConfirmDialogOpen}
        onClose={handleDeleteConfirmation}
        title="¿Estás seguro?"
        description="Esta acción eliminará el producto permanentemente."
      />
      <div className="flex justify-center gap-2 text-center">
        <span className="text-muted-foreground -mb-4 line-clamp-1 text-[8px] uppercase">
          {product.slugs.slice(0, 3).join(', ')}
        </span>
      </div>
      <div className="flex justify-center gap-2 text-center">
        <div className="flex flex-col text-center">
          {product.categorie && (
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase">Categoría</span>
                <div className="bg-primary mt-1 rounded-full p-1 px-2 text-[10px] text-white uppercase">
                  <EditableSelect
                    value={product.categorie.name}
                    options={categoryOptions}
                    onBlur={(e) => {
                      handleEdit('categorie_id', e, product.id);
                    }}
                    placeholder="Selecciona una categoría"
                  />
                </div>
              </div>
              {product.brand === null && (
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase">Marca</span>
                  <div className="bg-primary mt-1 rounded-full p-1 px-2 text-[10px] text-white uppercase">
                    <EditableInput
                      value={'N/A'}
                      onBlur={(e) => {
                        handleEdit('brand', e.target.value, product.id);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col text-center">
          {product.brand && (
            <>
              <span className="text-[10px] uppercase">Marca</span>
              <div className="bg-primary mt-1 rounded-full p-1 px-2 text-[10px] text-white uppercase">
                <EditableInput
                  value={product.brand}
                  onBlur={(e) => {
                    handleEdit('brand', e.target.value, product.id);
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <span className="lg:text-md -mt-2 line-clamp-2 text-center text-sm font-bold text-pretty whitespace-normal uppercase xl:text-lg">
        <EditableInput
          value={product.name}
          onBlur={(e) => {
            handleEdit('name', e.target.value, product.id);
          }}
        />
      </span>
      <div className="absolute bottom-5 left-0 grid w-full grid-cols-2 gap-4 px-2">
        <div className="">
          <p className="text-[10px] font-light uppercase">Venta</p>
          <div
            className={`text-xl font-bold ${currency === 'USD' ? 'text-usd' : 'text-primary'}`}
          >
            <EditableInput
              value={
                currency === 'USD'
                  ? formatPrice(product.price, roundPrice)
                  : formatPrice(product.price_bs, roundPrice)
              }
              type="number"
              onBlur={(e) => {
                handleEdit('price', e.target.value, product.id);
              }}
            />
          </div>
        </div>
        <div className="text-end">
          <p className="text-[10px] font-light uppercase">Entrada</p>
          <div className="text-xl font-bold">
            <EditableInput
              value={
                currency === 'USD'
                  ? formatPrice(product.price_ent, roundPrice)
                  : formatPrice(product.price_ent_bs, roundPrice)
              }
              type="number"
              onBlur={(e) => {
                handleEdit('price_ent', e.target.value, product.id);
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
