import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatPrice } from '@/features/formatPrice'
import { Trash } from 'lucide-react'
import React from 'react'

export const ItemsLayout = ({ product, setselectedProducts, dolar }) => {
  const handleRemoveProduct = () => {
    setselectedProducts((prevSelectedProducts) => prevSelectedProducts.filter((item) => item.id !== product.id))
  }

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value
    setselectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  return (
    <div className='gap-4 grid grid-cols-3 p-2 pr-4 rounded-md w-full transition-all cursor-pointer'>
      <div className='bg-white bg-contain bg-no-repeat bg-center shadow-md rounded-md w-full h-[70px]' style={{ backgroundImage: `url('${product.image}')` }} />
      <div className='flex flex-col justify-center col-span-2 w-full content'>
        <h1 className='line-clamp-1 font-bold text-sm uppercase'>
          {product.name}
        </h1>
        <div className='flex items-center gap-4 mt-2'>
          <Input
            placeholder='Cantidad'
            type='number'
            max='5000'
            min='0'
            value={product.quantity}
            onChange={handleQuantityChange}
          />
          <Button className='bg-slate-500 hover:bg-red-400 text-sm' onClick={handleRemoveProduct}>
            <Trash />
          </Button>
          <div className='flex flex-col items-end w-[300px]'>
            <p className='line-clamp-1 font-bold text-primary text-sm'>{formatPrice(product.price * product.quantity, 'bs', dolar)}</p>
            <p className='line-clamp-1 font-bold text-sm text-success'>{formatPrice(product.price * product.quantity, 'usd', dolar)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
