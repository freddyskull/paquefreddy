import { useProductStore } from '@/store/productStore'
import { useEffect } from 'react'


export const TotalCalculate = ({selectedProducts}) => {

  const { calculateTotal, calculateTotalProducts } = useProductStore()

  useEffect(() => {
    calculateTotalProducts()
  }, [selectedProducts, calculateTotalProducts])

  return (
    <div className='flex flex-col gap-2'>
      <p className='text-primary font-bold'>Total Bs: {calculateTotal.totalBs.toFixed(2)}</p>
      <p className='text-usd font-bold'>Total USD: {calculateTotal.totalDolar.toFixed(2)}</p>
    </div>
  )
}
