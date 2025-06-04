/* eslint-disable no-undef */
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatPrice } from '@/features/formatPrice'
import { Trash } from 'lucide-react'
import React, { useState } from 'react'
import { EditPriceDialog } from '../../editPriceDialog'

export const ItemsLayout = ({ product, setselectedProducts, dolar }) => {
  const handleRemoveProduct = () => {
    setselectedProducts((prevSelectedProducts) => prevSelectedProducts.filter((item) => item.id !== product.id))
  }
  const [currency, setcurrency] = useState(localStorage.getItem('currency'))

  const changeCurrency = (newCurrency) => {
    setcurrency(newCurrency)
    localStorage.setItem('currency', newCurrency)
  }
  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value
    setselectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const [editPriceState, setEditPriceState] = useState(false)

  return (
    <div className='gap-4 grid grid-cols-3 p-2 pr-4 rounded-md w-full transition-all cursor-pointer'>
      <div className='bg-white bg-contain bg-no-repeat bg-center shadow-md rounded-md w-full h-[70px]' style={{ backgroundImage: `url('${product.image}')` }} />
      <div className='flex flex-col justify-center col-span-2 w-full content'>
        <h1 className='font-bold text-sm uppercase line-clamp-1'>
          {product.name}
        </h1>
        <div className='flex items-center gap-4 mt-2'>
          <Input
            placeholder='Cantidad'
            type='number'
            value={product.quantity}
            onChange={handleQuantityChange}
          />
          <Button className='bg-slate-500 hover:bg-red-400 text-sm' onClick={handleRemoveProduct}>
            <Trash />
          </Button>
          <div className='flex flex-col items-end w-[300px]' onClick={() => setEditPriceState(true)}>
            <p className='font-bold text-primary text-sm line-clamp-1'>{formatPrice(product.price * product.quantity, 'bs', dolar)}</p>
            <p className='font-bold text-success text-sm line-clamp-1'>{formatPrice(product.price * product.quantity, 'usd', dolar)}</p>
          </div>
        </div>
      </div>
      {
        editPriceState && (
          <EditPriceDialog
            editPriceState={editPriceState}
            setEditPriceState={setEditPriceState}
            data={product}
            currency={currency}
            dollar={dolar}
            changeCurrency={changeCurrency}
          />
        )
      }
    </div>
  )
}
