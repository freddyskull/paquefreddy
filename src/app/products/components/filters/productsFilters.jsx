import { Input } from '@/components/ui/input'
import React from 'react'
import { CurrencySelector } from './currencySelector'
import { Settings } from './settings'
import { ProductForm } from '../productForm'
import { Calculate } from '../filters/calculate/Calculate'
import { PriceRange } from './PriceRange'

export const ProductsFilters = ({
  filtersTable,
  setFiltersTable,
  currency,
  changeCurrency,
  changeShowPriceEnt,
  showPriceEnt,
  data,
  showEdit,
  changeShowEdit,
  productActionDialog,
  setProductActionDialog
}) => {
  const onSearchHandle = (e) => {
    setFiltersTable((prevState) => ({ ...prevState, filters: e.target.value }))
  }
  return (
    <div className='flex justify-between items-center gap-3 px-4 pt-4 w-full'>
      <div className='flex justify-between items-center gap-3 w-full'>
        <div className='flex flex-col gap-1 w-full'>
          <Input value={filtersTable.filters} onChange={(e) => onSearchHandle(e)} className='bg-white h-[45px]' id='buscador' placeholder='Buscar producto...' />
        </div>
        <div className='hidden md:flex gap-2'>
          <PriceRange filtersTable={filtersTable} setFiltersTable={setFiltersTable} currency={currency} />
        </div>
      </div>
      <div className='flex justify-end items-center gap-2'>
        <ProductForm
          data={data}
          currency={currency}
          changeCurrency={changeCurrency}
          productActionDialog={productActionDialog}
          setProductActionDialog={setProductActionDialog}
        />
        <Calculate />
        <CurrencySelector currency={currency} changeCurrency={changeCurrency} />
        <div className='hidden md:block'>
          <Settings
            filtersTable={filtersTable}
            setFiltersTable={setFiltersTable}
            currency={currency}
            changeCurrency={changeCurrency}
            changeShowPriceEnt={changeShowPriceEnt}
            showPriceEnt={showPriceEnt}
            showEdit={showEdit}
            changeShowEdit={changeShowEdit}
          />
        </div>
      </div>
    </div>
  )
}
