import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import React from 'react'

export const GeneralSearch = ({ setFiltersTable, filtersTable }) => {
  const onSearchHandle = (e) => {
    setFiltersTable((prevState) => ({ ...prevState, filters: e.target.value }))
  }
  return (
    <div className='relative flex flex-col gap-1 w-full'>
      <Input value={filtersTable.filters} onChange={(e) => onSearchHandle(e)} className='bg-white h-[45px]' id='buscador' placeholder='Buscar producto...' />
      <div className={`top-[8px] right-2 fade-in cursor-pointer ${filtersTable.filters.length >= 2 ? 'absolute' : 'hidden'}`} onClick={() => setFiltersTable((prevState) => ({ ...prevState, filters: '' }))}>
        <div variant='outline' className='flex justify-center items-center bg-slate-200 p-2 rounded-full'><X size={10} /></div>
      </div>
    </div>
  )
}
