import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Cog } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DolarPrice } from '../dolarPrice'

export const Settings = ({ currency, changeCurrency }) => {
  const buttonClass = `text-slate-500 flex bg-white justify-between ${currency === 'usd' ? 'hover:bg-success' : 'hover:bg-primary'} p-2 rounded-md hover:text-primary-foreground transition-all cursor-pointer w-full`
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant='outline'><Cog /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-4'>
        <DropdownMenuLabel>CONFIGURACIONES</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className='text-sm'>
          <Button
            variant='gosh'
            className={buttonClass}
            onClick={() => { changeCurrency(currency === 'usd' ? 'bs' : 'usd') }}
          >
            <span>Moneda</span>
            <span className={`font-bold text-[13px] text-white ${currency !== 'usd' && 'hidden'}`}>USD</span>
            <span className={`font-bold text-[13px] text-white ${currency !== 'bs' && 'hidden'}`}>BS</span>
          </Button>
        </div>
        <div className='p-0'>
          <Button
            variant='gosh'
            className={`${buttonClass} p-0`}
          >
            <DolarPrice />
          </Button>
        </div>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
