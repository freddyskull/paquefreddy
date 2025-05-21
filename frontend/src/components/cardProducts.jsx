import React, { useMemo, useState } from 'react'
import { Card } from '@/components/ui/card'
import { DateBadge } from '@/components/dataTable/products/dateBadge'
import { useConfigStore } from '@/store/configStore'
import { useCategoriesStore } from '@/store/categoriesStore'
import { EditableInput } from '@/components/inputs/EditableInput'
import { EditableSelect } from '@/components/inputs/EditableSelect'
import { formatPrice } from '@/utils/format'
import { Button } from './ui/button'
import { Pencil, Plus, Trash } from 'lucide-react'
import { useProductStore } from '@/store/productStore'
import { ConfirmationDialog } from '@/components/dialog/ConfirmationDialog'

export const ProductCard = ({ product, handleEdit }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const { categories } = useCategoriesStore()
  const { config, currency } = useConfigStore()
  const { deleteProduct } = useProductStore()
  const roundPrice = config?.roundPrice
  const categoryOptions = useMemo(
    () =>
      categories.map((cat) => ({
        value: cat.id,
        label: cat.name,
      })),
    [categories]
  )

  const handleDeleteConfirmation = (confirmed) => {
    setIsConfirmDialogOpen(false)
    if (confirmed) {
      setIsDeleting(true)
      deleteProduct(product.id)
    }
  }

  const onDeleteClick = () => {
    setIsConfirmDialogOpen(true)
  }

  return (
    <Card
      key={product.id}
      id="card-product"
      className={`group relative flex flex-col bg-white dark:bg-secondary hover:shadow-2xl hover:shadow-primary/10 p-4 min-h-[440px] product-card transition-opacity duration-400 ${isDeleting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
    >
      <div className="top-5 left-0 absolute flex justify-between gap-2 px-1 w-full">
        <DateBadge date={product.createdAt} />
        <span className="z-10 bg-accent mr-4 p-1 px-3 rounded-full text-[8px] text-primary-foreground uppercase">
          {product.unity}
        </span>
      </div>
      <div
        className="relative flex justify-center items-center bg-white bg-contain bg-no-repeat bg-center rounded-md w-full h-48 image"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div
          className="top-0 left-0 z-10 absolute flex justify-center items-center opacity-0 group-hover:opacity-100 rounded-md w-full h-full transition-opacity duration-300"
          id="card-acctions"
        >
          <div className='flex justify-center items-center gap-4 bg-black/20 p-2 rounded-sm w-3/4'>
            <div>
              <Button variant="outline" className="w-8 h-8">
                <Pencil className="text-grey-300" />
              </Button>
            </div>
            <div>
              <Button variant="outline" className="w-8 h-8" onClick={onDeleteClick}>
                <Trash className="text-grey-300" />
              </Button>
            </div>
            <div>
              <Button variant="outline" className="w-8 h-8">
                <Plus className="text-grey-300" />
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
        <span className="-mb-4 text-[8px] text-muted-foreground uppercase line-clamp-1">
          {product.slugs.slice(0, 3).join(', ')}
        </span>
      </div>
      <div className="flex justify-center gap-2 text-center">
        <div className="flex flex-col text-center">
          {product.categorie && (
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase">Categoría</span>
                <div className="bg-primary mt-1 p-1 px-2 rounded-full text-[10px] text-white uppercase">
                  <EditableSelect
                    value={product.categorie.name}
                    options={categoryOptions}
                    onBlur={(e) => {
                      handleEdit('categorie_id', e, product.id)
                    }}
                    placeholder="Selecciona una categoría"
                  />
                </div>
              </div>
              {product.brand === null && (
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase">Marca</span>
                  <div className="bg-primary mt-1 p-1 px-2 rounded-full text-[10px] text-white uppercase">
                    <EditableInput
                      value={'N/A'}
                      onBlur={(e) => {
                        handleEdit('brand', e.target.value, product.id)
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
              <div className="bg-primary mt-1 p-1 px-2 rounded-full text-[10px] text-white uppercase">
                <EditableInput
                  value={product.brand}
                  onBlur={(e) => {
                    handleEdit('brand', e.target.value, product.id)
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <span className="-mt-2 font-bold lg:text-md text-sm xl:text-lg text-center uppercase line-clamp-2 text-pretty whitespace-normal">
        <EditableInput
          value={product.name}
          onBlur={(e) => {
            handleEdit('name', e.target.value, product.id)
          }}
        />
      </span>
      <div className="bottom-5 left-0 absolute gap-4 grid grid-cols-2 px-2 w-full">
        <div className="">
          <p className="font-light text-[10px] uppercase">Venta</p>
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
                handleEdit('price', e.target.value, product.id)
              }}
            />
          </div>
        </div>
        <div className="text-end">
          <p className="font-light text-[10px] uppercase">Entrada</p>
          <div className="font-bold text-xl">
            <EditableInput
              value={
                currency === 'USD'
                  ? formatPrice(product.price_ent, roundPrice)
                  : formatPrice(product.price_ent_bs, roundPrice)
              }
              type="number"
              onBlur={(e) => {
                handleEdit('price_ent', e.target.value, product.id)
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
