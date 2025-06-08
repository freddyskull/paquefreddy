import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pencil, X } from 'lucide-react'
import React, { useEffect } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useProductStore } from '@/store/productStore'

export const SelectedProduct = ({ product, updateSelectedProductQuantity }) => {
  const { removeSelectedProduct } = useProductStore()
  useEffect(() => {
    if (product.quantity < 0 || isNaN(product.quantity)) {
      updateSelectedProductQuantity(product.id, null)
    }
  }, [product.quantity, product.id, updateSelectedProductQuantity])

  return (
    <div className="flex justify-around gap-4 w-full!">
      <div
        className="bg-white rounded-md! w-16! h-16!"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <div>
        <div className="flex justify-between items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <h3 className="w-[195px] font-bold text-left line-clamp-1">
                  {product.name}
                </h3>
              </TooltipTrigger>
              <TooltipContent className="dark:bg-secondary max-w-[200px] dark:text-slate-200">
                <p className="font-bold dark:text-slate-200 text-wrap">{product.name}</p>
                <p className="text-white/70 dark:text-slate-400 text-xs text-wrap">
                  {product.slugs.join(', ')}
                </p>
                <div className="flex justify-between items-center gap-2 mt-2">
                  <p className="font-bold dark:text-white text-xs">
                    Bs {product.price_bs.toFixed(2)}
                  </p>
                  <span className="text-slate-200 text-xs">|</span>
                  <p className="font-bold text-white text-xs">
                    USD {product.price.toFixed(2)}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="w-6! h-6!"
              onClick={() => updateSelectedProductQuantity(product.id, null)}
            >
              <Pencil />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-6! h-6!"
              onClick={() => removeSelectedProduct(product.id)}
            >
              <X />
            </Button>
          </div>
        </div>
        <p className="text-slate-400 text-xs">Cantidad: {product.quantity}</p>
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="font-bold text-primary">
              {(product.price_bs * product.quantity).toFixed(2)}
            </p>
            <span className="text-slate-400 text-xs">|</span>
            <p className="font-bold text-usd">
              {(product.price * product.quantity).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              className="w-6! h-6!"
              size="icon"
              onClick={() =>
                updateSelectedProductQuantity(
                  product.id,
                  Math.max(0, product.quantity - 1)
                )
              }
            >
              -
            </Button>
            <Input
              type="number"
              value={product.quantity}
              className="w-12"
              min={0}
              max={100}
              onChange={(e) => {
                const value = Math.max(0, parseInt(e.target.value, 10))
                updateSelectedProductQuantity(product.id, value)
              }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="w-6! h-6!"
              onClick={() =>
                updateSelectedProductQuantity(product.id, product.quantity + 1)
              }
            >
              +
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="flex gap-2">
        <button
          onClick={() =>
            updateSelectedProductQuantity(
              product.id,
              product.quantity + 1
            )
          }
        >
          +
        </button>
        <input
          type="number"
          value={product.quantity}
          onChange={(e) =>
            updateSelectedProductQuantity(product.id, e.target.value)
          }
        />
        <button
          onClick={() =>
            updateSelectedProductQuantity(
              product.id,
              product.quantity - 1
            )
          }
        >
          -
        </button>
      </div> */}
    </div>
  )
}
