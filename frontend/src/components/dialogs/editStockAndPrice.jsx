import React, { useEffect, useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '../ui/dialog'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Pencil } from 'lucide-react'
import { useConfigStore } from '@/store/configStore'
import { CurrencySelector } from '@/app/currencySelector'
import { useProductStore } from '@/store/productStore'

export const EditStockAndPrice = ({ product }) => {
  const { currency } = useConfigStore()
  const { patchProduct, selectedProducts, updateSelectedProducts } = useProductStore()
  const [open, setOpen] = useState(false)
  const [stock, setStock] = useState(product.stock)
  const [price, setPrice] = useState(currency === 'USD' ? parseFloat(product.price).toFixed(2) : parseFloat(product.price_bs).toFixed(2))
  useEffect(() => {
    setStock(product.stock)
    setPrice(currency === 'USD' ? parseFloat(product.price).toFixed(2) : parseFloat(product.price_bs).toFixed(2))
  }, [product, currency])

  const handleSave = async () => {
    const updatedSelectedProduct = {
      stock: stock ? parseInt(stock, 10) : product.stock,
      price: parseFloat(price),
      currency: currency,
    }
    const response = await patchProduct(product.id, updatedSelectedProduct)
    if (response) {
      const selectedProductIds = selectedProducts.map(p => p.id)
      updateSelectedProducts(selectedProductIds)
      setOpen(false)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost"
          size="icon"><Pencil /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader >
          <div className='flex items-center gap-2'>
            <DialogTitle>Editar: <span className='dark:text-slate-300 text-xs uppercase'>{product.name}</span></DialogTitle>
            <CurrencySelector />
          </div>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="flex gap-2">
            <div className='w-24'>
              <label className='text-xs' htmlFor="stock">Stock</label>
              <Input
                id="stock"
                placeholder="Stock"
                type="number"
                value={stock}
                onChange={e => setStock(e.target.value)}
                className="mt-2"
              />
            </div>
            <div className='w-full'>
              <label className='text-xs' htmlFor="price">Precio de venta</label>
              <Input
                id="price"
                placeholder="Precio"
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
          <DialogFooter className="flex items-center gap-2">
            <DialogClose asChild >
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button onClick={handleSave}>Guardar</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
