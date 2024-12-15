import { Input } from '@/components/ui/input'
import React from 'react'
// import { CurrencySelector } from './currencySelector'
import { Settings } from './settings'
import { ProductForm } from '../productForm'

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
    <div className='grid grid-cols-3 px-4 pt-4'>
      <div className='col-span-2'>
        <div className='flex flex-col gap-1'>
          <Input value={filtersTable.filters} onChange={(e) => onSearchHandle(e)} className='bg-white' id='buscador' placeholder='Buscar producto...' />
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
        {/* <CurrencySelector currency={currency} changeCurrency={changeCurrency} /> */}
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
  )
}
