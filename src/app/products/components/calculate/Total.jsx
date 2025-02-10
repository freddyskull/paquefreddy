import { formatPrice } from '@/features/formatPrice'
import React from 'react'

export const Total = ({ total, dolar }) => {
  return (
    <div className='flex justify-between px-4'>
      <div>
        <span className='font-bold text-primary text-sm uppercase'>Precio en BS</span>
        <h2 className='font-bold text-2xl text-primary'>{formatPrice(total, 'bs', dolar)}</h2>
      </div>
      <div className='flex flex-col items-end'>
        <span className='font-bold text-sm text-success uppercase'>Precio en USD</span>
        <h2 className='font-bold text-2xl text-success'>{formatPrice(total, 'usd', dolar)}</h2>
      </div>
    </div>
  )
}
