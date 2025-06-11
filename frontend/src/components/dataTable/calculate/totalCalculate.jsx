import { useProductStore } from '@/store/productStore'
import { useEffect } from 'react'


export const TotalCalculate = ({ selectedProducts }) => {
  const { calculateTotal, calculateTotalProducts } = useProductStore()
  useEffect(() => {
    calculateTotalProducts()
  }, [selectedProducts, calculateTotalProducts])

  return (
    <div className='flex justify-between gap-2 mt-2'>
      <div>
        <p className='text-slate-500 dark:text-white/80 text-xs uppercase'>Total Bs</p>
        <h4 className='mt-1 font-bold text-primary text-2xl'>{calculateTotal.totalBs.toFixed(2)}</h4>
      </div>
      <div className='text-center'>
        <p className='text-slate-500 dark:text-white/80 text-xs uppercase'>Ganancias</p>
        <h4 className='flex justify-center items-center gap-2 mt-1 text-md'>
          <span className='font-bold'>Bs {calculateTotal.totalProfits.bs.toFixed(2)}</span>
          <span className='text-xs'>|</span>
          <span className='font-bold'>${calculateTotal.totalProfits.usd.toFixed(2)}</span></h4>
      </div>
      <div className='text-right'>
        <p className='text-slate-500 dark:text-white/80 text-xs uppercase'>Total USD</p>
        <h4 className='mt-1 font-bold text-usd text-2xl'>${calculateTotal.totalDolar.toFixed(2)}</h4>
      </div>
    </div>
  )
}
