import { Button } from '@/components/ui/button'
import { DropdownMenuPortal, DropdownMenuSubContent } from '@radix-ui/react-dropdown-menu'
import { SortAsc, SortDesc } from 'lucide-react'
import React from 'react'

export const ShowHidden = ({ filtersTable, setFiltersTable }) => {
  const filter = [
    { name: 'Nombre', value: 'Nombre' },
    { name: 'Precio', value: 'Precio' },
    // { name: 'Precio entrada', value: 'price_ent' },
    { name: 'Fecha de creación', value: 'Fecha de creación' }
    // { name: 'Fecha de edición', value: 'updated_at' }
  ]

  const handleSortChange = (item) => {
    const isSameColumn = filtersTable.sorting[0].id === item.value
    const newSorting = {
      id: item.value,
      desc: isSameColumn ? !filtersTable.sorting[0].desc : false
    }

    setFiltersTable({ ...filtersTable, sorting: [newSorting] })
  }

  return (
    <DropdownMenuPortal className='bg-white mr-4'>
      <DropdownMenuSubContent>
        <div className='flex flex-col bg-white shadow-md p-1 rounded-md'>
          {filter.map((item, index) => (
            <Button
              key={index}
              className={`${filtersTable.sorting[0].id === item.value ? 'bg-primary/20 text-primary font-bold hover:text-white' : 'bg-white text-slate-500 hover:text-white'} p-2`}
              onClick={() => handleSortChange(item)}
            >
              <div className='flex justify-between items-center gap-4 w-full'>
                <div className='text-[13px] uppercase'>{item.name}</div>
                <div>
                  {filtersTable.sorting[0].id === item.value && filtersTable.sorting[0].desc
                    ? (
                      <SortAsc width={18} />
                    )
                    : (
                      <SortDesc width={18} />
                    )}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  )
}
