import { formatPrice } from '@/features/formatPrice'
import React from 'react'

export const Total = ({ total, dolar, profit }) => {
  return (
    <div className='flex justify-between px-4'>
      <div>
        <span className='font-bold text-primary text-sm uppercase'>Precio BS</span>
        <h2 className='font-bold text-primary text-2xl'>{formatPrice(total, 'bs', dolar)}</h2>
      </div>
      <div className='-mt-4 text-center'>
        <span className='font-bold text-[13px] text-slate-500 uppercase'>Ganancia</span>
        <h2 className='font-bold text-[15px] text-slate-600'>{formatPrice(profit, 'bs', dolar)} BS</h2>
        <h2 className='font-bold text-[15px] text-slate-600'>{formatPrice(profit, 'usd', dolar)} USD</h2>
      </div>
      <div className='text-end'>
        <span className='font-bold text-success text-sm uppercase'>Precio USD</span>
        <h2 className='font-bold text-success text-2xl'>{formatPrice(total, 'usd', dolar)}</h2>
      </div>
    </div>
  )
}
