/* eslint-disable no-undef */
import React from 'react'
import {
  ToggleGroup,
  ToggleGroupItem
} from '@/components/ui/toggle-group'
import { DollarSign, HandCoins } from 'lucide-react'

export const CurrencySelector = ({ currency, changeCurrency }) => {
  return (
    <ToggleGroup type='single' value={currency} onValueChange={(e) => changeCurrency(e)} className='flex gap-0'>
      <ToggleGroupItem value='bs' className='bg-white data-[state=on]:bg-primary/20 rounded-none rounded-tl-md rounded-bl-md w-10 font-semibold text-[13px] data-[state=on]:text-primary'>
        <HandCoins />
      </ToggleGroupItem>
      <ToggleGroupItem value='usd' className='bg-white data-[state=on]:bg-success/20 rounded-none rounded-tr-md rounded-br-md w-10 font-semibold text-[13px] data-[state=on]:text-success'>
        <DollarSign />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
