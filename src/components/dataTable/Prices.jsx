import React from 'react'
import { FormInput } from '../formInput'
import { Badge } from '../ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { formatPrice } from '@/features/formatPrice'

export const Prices = ({ register, errors, bundleProduct, watch, setValue, dolar }) => {
  const onPercent = (e, percentValue) => {
    e.preventDefault()
    const price = parseFloat(watch().price_ent)
    const percent = price * percentValue
    setValue('price', formatPrice((price + percent), 'usd', dolar)) // aqui es usd debido a que necesito que sea el precio exacto
  }

  return (
    <div className={`gap-4 grid mb-2 ${bundleProduct ? 'grid-cols-4' : 'grid-cols-2'}`}>
      <div className='relative'>
        <FormInput
          register={register}
          label='Precio entrada'
          placeholder='Campo requerido *'
          name='price_ent'
          type='text'
          error={errors}
        />
        <div className={`flex items-center absolute -bottom-1 gap-1 ${errors.price_ent === undefined && watch().price_ent > 0 ? 'block' : 'hidden'}`}>
          <TooltipProvider placement='bottom-start'>
            <Tooltip>
              <TooltipTrigger>
                <Badge variant='outline' onClick={(e) => onPercent(e, 0.3)} className='text-[10px]'>30%</Badge>
              </TooltipTrigger>
              <TooltipContent className='text-center'>
                <p>Auto precio del <b>30%</b></p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider placement='bottom-start'>
            <Tooltip>
              <TooltipTrigger>
                <Badge variant='outline' onClick={(e) => onPercent(e, 0.4)} className='text-[10px]'>40%</Badge>
              </TooltipTrigger>
              <TooltipContent className='text-center'>
                <p>Auto precio del <b>40%</b></p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className={bundleProduct ? 'block' : 'hidden'}>
        <FormInput
          register={register}
          label='Cantidad por pqte'
          name='bundle'
          error={errors}
          type='number'
        />
      </div>
      <FormInput
        register={register}
        label='Precio individual'
        name='price'
        placeholder='Campo requerido *'
        type='text'
        error={errors}
      />
      <div className={bundleProduct ? 'block' : 'hidden'}>
        <FormInput
          register={register}
          label='precio por pqte'
          name='price_bundle'
          error={errors}
          type='text'
        />
      </div>
    </div>
  )
}
