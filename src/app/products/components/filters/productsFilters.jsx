import React from 'react'
import { CurrencySelector } from './currencySelector'
import { Settings } from '../../../settings/settings'
import { ProductForm } from '../productForm'
import { Calculate } from '../filters/calculate/Calculate'
import { PriceRange } from './PriceRange'
import { CategoryFilter } from './CategoryFilter'
import { GeneralSearch } from './generalSearch'

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
  return (
    <div className='flex justify-between items-center gap-3 px-4 pt-4 w-full'>
      <div className='flex justify-between items-center gap-3 w-full'>
        <section className='w-full' id='Search'>
          <GeneralSearch setFiltersTable={setFiltersTable} filtersTable={filtersTable} />
        </section>
        <div id='category-filter' className='hidden md:block gap-2 w-2/6'>
          <CategoryFilter filtersTable={filtersTable} setFiltersTable={setFiltersTable} />
        </div>
        <div className='hidden xl:flex gap-2' id='price-range'>
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
