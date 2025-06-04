import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useCategoriesStore } from '@/features/store/categoriesStore'

export const CategoryFilter = ({ filtersTable, setFiltersTable }) => {
  const { categories } = useCategoriesStore()
  const updateColumnFilter = (id, value) => {
    setFiltersTable((prevState) => ({
      ...prevState,
      columnFilters: value === null
        ? prevState.columnFilters.filter((filter) => filter.id !== id)
        : [...prevState.columnFilters.filter((filter) => filter.id !== id), { id, value }]
    }))
  }
  return (
    <Select value={filtersTable.value} onValueChange={(value) => updateColumnFilter('categorie_clt', value)}>
      <SelectTrigger className='min-w-[140px] max-w-[400px] h-[45px]'>
        <SelectValue placeholder='Filtrar categoría' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={null}>
          Ninguno
        </SelectItem>
        {
          categories.items.map((category) => (
            <SelectItem
              key={category.id}
              value={category.id}
            >
              {category.title}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}
