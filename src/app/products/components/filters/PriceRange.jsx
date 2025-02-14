import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useConfigStore } from '@/features/store/configStore'
import { Eraser } from 'lucide-react'
import { useEffect, useState } from 'react'

export const PriceRange = ({ setFiltersTable, filtersTable, currency }) => {
  const [rage, setrage] = useState({ id: 'Precio', value: ['', ''] })
  const [displayValue, setDisplayValue] = useState({ min: '', max: '' })
  const { config } = useConfigStore()
  const dolar = config.item.dollar

  const handleMinChange = (e) => {
    const inputValue = e.target.value
    let newValue = [inputValue, rage.value[1]]
    if (currency === 'bs' && inputValue !== '') {
      newValue = [inputValue / dolar, rage.value[1]]
    }
    setrage({ ...rage, value: newValue })
    setDisplayValue({ ...displayValue, min: inputValue })
    setFiltersTable({ ...filtersTable, columnFilters: [{ id: 'Precio', value: newValue }] })
  }

  const handleMaxChange = (e) => {
    const inputValue = e.target.value
    let newValue = [rage.value[0], inputValue]
    if (currency === 'bs' && inputValue !== '') {
      newValue = [rage.value[0], inputValue / dolar]
    }
    setrage({ ...rage, value: newValue })
    setDisplayValue({ ...displayValue, max: inputValue })
    setFiltersTable({ ...filtersTable, columnFilters: [{ id: 'Precio', value: newValue }] })
  }
  const onResetValues = () => {
    setrage({ id: 'Precio', value: ['', ''] })
    setDisplayValue({ min: '', max: '' })
    setFiltersTable({ ...filtersTable, columnFilters: [] })
  }
  useEffect(() => {
    onResetValues()
  }, [currency])

  return (
    <div className='flex gap-2'>
      <Input
        type='number'
        value={displayValue.min}
        placeholder='Minimo'
        className='bg-white w-[100px] h-[45px]'
        min={0}
        max={displayValue.max}
        onChange={handleMinChange}
      />
      <Input
        type='number'
        value={displayValue.max}
        placeholder='Maximo'
        min={displayValue.min}
        max={999999}
        className='bg-white w-[100px] h-[45px]'
        onChange={handleMaxChange}
      />
      {
        displayValue.min !== '' && displayValue.max !== '' && (
          <Button
            className={currency === 'usd'
              ? 'bg-success/20 text-success hover:bg-success hover:text-white'
              : 'bg-primary/20 text-primary hover:bg-primary hover:text-white'}
            onClick={() => onResetValues()}
          >
            <Eraser size={20} />
          </Button>
        )
      }
    </div>
  )
}
