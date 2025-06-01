import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, X } from 'lucide-react';
import React, { useEffect } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useProductStore } from '@/store/productStore';

export const SelectedProduct = ({ product, updateSelectedProductQuantity }) => {
  const { removeSelectedProduct } = useProductStore();
  useEffect(() => {
    if (product.quantity < 0 || isNaN(product.quantity)) {
      updateSelectedProductQuantity(product.id, null);
    }
  }, [product.quantity, product.id, updateSelectedProductQuantity]);
  
  return (
    <div className="flex w-full! justify-around gap-4">
      <div
        className="h-16! w-16! rounded-md! bg-white"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <div>
        <div className="flex items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <h3 className="line-clamp-1 w-[195px] text-left font-bold">
                  {product.name}
                </h3>
              </TooltipTrigger>
              <TooltipContent className="dark:bg-secondary dark:text-slate-200 max-w-[200px]">
                <p className="font-bold text-wrap dark:text-slate-200">{product.name}</p>
                <p className="text-xs text-wrap text-white/70 dark:text-slate-400">
                  {product.slugs.join(', ')}
                </p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <p className="text-xs font-bold dark:text-white">
                    Bs {product.price_bs.toFixed(2)}
                  </p>
                  <span className="text-xs text-slate-200">|</span>
                  <p className="text-xs font-bold text-white">
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
              className="h-6! w-6!"
              onClick={() => updateSelectedProductQuantity(product.id, null)}
            >
              <Pencil />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6! w-6!"
              onClick={() => removeSelectedProduct(product.id)}
            >
              <X />
            </Button>
          </div>
        </div>
        <p className="text-xs text-slate-400">Cantidad: {product.quantity}</p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <p className="text-primary font-bold">
              {(product.price_bs * product.quantity).toFixed(2)}
            </p>
            <span className="text-xs text-slate-400">|</span>
            <p className="text-usd font-bold">
              {(product.price * product.quantity).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              className="h-6! w-6!"
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
                const value = Math.max(0, parseInt(e.target.value, 10));
                updateSelectedProductQuantity(product.id, value);
              }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-6! w-6!"
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
  );
};
