/* eslint-disable no-undef */
import { Badge } from '@/components/ui/badge'
import { Sparkles } from 'lucide-react'
import React from 'react'
import { CurrencySelector } from './filters/currencySelector'
import { SlugsComponent } from '../productsPage'
import { Button } from '@/components/ui/button'

export const PreviewProduct = ({ watch, categories, currency, changeCurrency }) => {
  const showPriceEnt = JSON.parse(localStorage.getItem('showPriceEnt'))
  const priceClass = `font-bold text-end ${currency === 'bs' ? 'text-primary hover:text-primary/60' : 'text-success hover:text-success/60'}`
  const imgClass = { background: `url(${watch().image})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
  const findCategorieById = (id) => {
    if (id !== '' && id !== undefined && id !== null) {
      const resp = categories.find(categorie => categorie.id === id)
      return resp.title
    } else {
      return 'N/A'
    }
  }
  return (
    <div
      className='flex flex-col items-center gap-2 h-full text-slate-400'
      style={{ marginTop: '25px' }}
    >
      <div className='flex justify-between w-full'>
        <Button variant='outline' className='h-[38px]'>Nueva categoría</Button>
        <CurrencySelector currency={currency} changeCurrency={changeCurrency} />
      </div>
      <div className='relative bg-white p-4 rounded-md w-full'>
        <div className='grid grid-cols-2'>
          <div className='top-2 left-2 absolute flex justify-center items-center'>
            <Badge className={`gap-1 flex items-center text-[10px] h-6 px-2 uppercase ${currency === 'usd' ? 'bg-success' : 'bg-primary'}`}>
              <Sparkles width={12} />
              Nuevo
            </Badge>
          </div>
        </div>
        <div
          className={`flex justify-center items-center ${watch().image !== '' ? 'bg-white' : 'bg-slate-200'} rounded-md w-full h-[150px]`}
          style={watch().image !== '' ? imgClass : {}}
        >
          {
            watch().image === '' && (
              <div className='text-center'>
                <h2 className='font-bold text-xl uppercase'>Imágen del producto</h2>
              </div>
            )
          }
        </div>
        <div className='mt-4 text-center title'>
          <h1 className='mt-2 line-clamp-2 font-bold text-xl uppercase'>{watch().name === '' ? 'N/A' : watch().name}</h1>
        </div>
        <div>
          <SlugsComponent itemsList={watch().slugs} />
        </div>
        <div className='flex justify-between mt-4'>
          <div className='flex flex-col items-center gap-1 w-[50%]'>
            <span className='font-bold text-[10px] uppercase'>Categoria</span>
            <Badge variant='outline'>{
              findCategorieById(watch().categorie_clt)
            }
            </Badge>
          </div>
          <div className='flex flex-col items-center gap-1 w-[50%]'>
            <span className='font-bold text-[10px] text-slate-400 uppercase'>Marca</span>
            <Badge variant='outline'>{watch().brand === '' ? 'N/A' : watch().brand}</Badge>
          </div>
        </div>
        {
          showPriceEnt
            ? (
              <div className='flex justify-between mt-4'>
                <div className='flex flex-col items-start gap-1'>
                  <span className='text-[10px] text-slate-400 uppercase'>venta</span>
                  <span className={`${priceClass} text-lg`}>{watch().price === 0 || watch().price === '' ? 'N/A' : watch().price}</span>
                </div>
                <div>
                  <span className='text-slate-300'>|</span>
                </div>
                <div className='text-right flex flex-col gap-1'>
                  <span className='text-[10px] text-slate-400 uppercase'>Entrada</span>
                  <span className={`${priceClass} text-lg text-slate-400`}>{watch().price_ent === 0 || watch().price_ent === '' ? 'N/A' : watch().price_ent}</span>
                </div>
              </div>
            )
            : (
              <div className='flex justify-center mt-4'>
                <div className='flex flex-col text-center'>
                  <span className='text-[10px] text-slate-400 uppercase'>PRECIO</span>
                  <span className={`${priceClass} text-2xl`}>
                    {watch().price}
                  </span>
                </div>
              </div>
            )
        }
      </div>
    </div>
  )
}
