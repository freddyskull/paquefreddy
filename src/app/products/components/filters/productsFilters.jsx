import { Input } from '@/components/ui/input'
import React from 'react'
// import { CurrencySelector } from './currencySelector'
import { Button } from '@/components/ui/button'
import { Boxes } from 'lucide-react'
import { Settings } from './settings'

export const ProductsFilters = ({ filtersTable, setFiltersTable, currency, changeCurrency }) => {
  const onSearchHandle = (e) => {
    setFiltersTable((prevState) => ({ ...prevState, filters: e.target.value }))
  }
  return (
    <div className='grid grid-cols-3 px-4 pt-4'>
      <div className='col-span-2'>
        <div className='flex flex-col gap-1'>
          <Input value={filtersTable.filters} onChange={(e) => onSearchHandle(e)} className='bg-white' id='buscador' placeholder='Buscar producto...' />
        </div>
      </div>
      <div className='flex justify-end items-center gap-2'>
        <Button variant='outline' className={`md:block hidden ${currency === 'usd' && 'hover:bg-success'}`}>
          <span className='lg:block hidden'>Nuevo producto</span>
          <Boxes className='lg:hidden' />
        </Button>
        {/* <CurrencySelector currency={currency} changeCurrency={changeCurrency} /> */}
        <Settings filtersTable={filtersTable} setFiltersTable={setFiltersTable} currency={currency} changeCurrency={changeCurrency} />
      </div>
    </div>
  )
}
