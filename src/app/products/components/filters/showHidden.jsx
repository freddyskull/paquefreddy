import { DropdownMenuPortal, DropdownMenuSubContent } from '@radix-ui/react-dropdown-menu'
import { AlignJustify } from 'lucide-react'
import React from 'react'

export const ShowHidden = ({ buttonClass }) => {
  return (
    <DropdownMenuPortal>
      <DropdownMenuSubContent>
        <div className='p-0'>
          <div className={`${buttonClass}`}>
            <div className='flex justify-between gap-4 p-2 w-full switch'>
              <div>Nombre</div>
              <div>
                <AlignJustify size={10} />
              </div>
            </div>
          </div>
        </div>
        <div className='p-0'>
          <div className={`${buttonClass}`}>
            <div className='flex justify-between gap-4 p-2 w-full switch'>
              Precio
              <div>
                <AlignJustify size={10} />
              </div>
            </div>
          </div>
        </div>
        <div className='p-0'>
          <div className={`${buttonClass}`}>
            <div className='flex justify-between gap-4 p-2 w-full switch'>
              Precio entrada
              <div>
                <AlignJustify size={10} />
              </div>
            </div>
          </div>
        </div>
        <div className='p-0'>
          <div className={`${buttonClass}`}>
            <div className='flex justify-between gap-4 p-2 w-full switch'>
              Fecha de creación
              <div>
                <AlignJustify size={10} />
              </div>
            </div>
          </div>
        </div>
        <div className='p-0'>
          <div className={`${buttonClass}`}>
            <div className='flex justify-between gap-4 p-2 w-full switch'>
              Fecha de edición
              <div>
                <AlignJustify size={10} />
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  )
}
