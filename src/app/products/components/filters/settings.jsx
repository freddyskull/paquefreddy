import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Settings2 } from 'lucide-react'
import { DolarPrice } from '../dolarPrice'
import { Switch } from '@/components/ui/switch'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ShowHidden } from './showHidden'

export const Settings = ({ currency, changeCurrency, changeShowPriceEnt, showPriceEnt, showEdit, changeShowEdit, filtersTable, setFiltersTable }) => {
  const buttonClass = `text-slate-500 flex bg-white justify-between ${currency === 'usd' ? 'hover:bg-success' : 'hover:bg-primary'} rounded-md hover:text-primary-foreground transition-all cursor-pointer w-full text-sm uppercase font-semibold`
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='bg-white btn'>
          <Settings2 width={18} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-4'>
        <DropdownMenuLabel>CONFIGURACIONES</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className='text-sm'>
          <div
            variant='gosh'
            className={`${buttonClass} p-2`}
            onClick={() => { changeCurrency(currency === 'usd' ? 'bs' : 'usd') }}
          >
            <span>Moneda</span>
            <span className={`font-bold text-[13px] ${currency !== 'usd' && 'hidden'}`}>USD</span>
            <span className={`font-bold text-[13px] ${currency !== 'bs' && 'hidden'}`}>BS</span>
          </div>
        </div>
        <div className='p-0'>
          <div className={`${buttonClass}`}>
            <DolarPrice currency={currency} />
          </div>
        </div>
        <div className='p-0'>
          <div className={`${buttonClass}`} onClick={() => changeShowPriceEnt(!showPriceEnt)}>
            <div className='flex justify-between items-center gap-4 p-2 w-full switch'>
              Precio entrada
              <Switch className='small-switch' checked={showPriceEnt} />
            </div>
          </div>
        </div>
        <div className='p-0'>
          <div className={`${buttonClass}`} onClick={() => changeShowEdit(!showEdit)}>
            <div className='flex justify-between gap-4 p-2 w-full switch'>
              Mostrar editados
              <Switch className='small-switch' checked={showEdit} />
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={`${buttonClass} hover:text-foreground`}>
            Ordenar por
          </DropdownMenuSubTrigger>
          <ShowHidden buttonClass={buttonClass} filtersTable={filtersTable} setFiltersTable={setFiltersTable} />
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={`${buttonClass} hover:text-foreground`}>
            Mostrar o ocultar
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <ToggleGroup type='multiple' className='flex flex-col'>
                {
                  Object.entries(filtersTable.columnVisibility).slice(0, -2).map(([key, value], index) => (
                    // <div key={index} className='p-0'>
                    //   <div className={`${buttonClass}`}>
                    //     <div className='flex justify-between items-center gap-8 p-2 w-full switch'>
                    //       <p>
                    //         {key}
                    //       </p>
                    //       <Switch className='small-switch' checked={value} />
                    //     </div>
                    //   </div>
                    // </div>
                    <ToggleGroupItem value={value} className='w-full uppercase' key={index}>{key}</ToggleGroupItem>
                  ))
                }
              </ToggleGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
