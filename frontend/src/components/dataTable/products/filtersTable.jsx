import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { PlusIcon, Calculator, BrushCleaningIcon, XIcon } from 'lucide-react'
import { CategoryDialog } from '@/components/dialogs/categoryDialog'
import { Link } from 'react-router-dom'
import { CalculateProducts } from '../calculate/calculateProducts'

export const FiltersTable = ({
  categories,
  searchTerm,
  columnFilters,
  setColumnFilters,
  handleSearch,
  currency,
  config,
  isLoadingConfig,
}) => {

  const dolar = isLoadingConfig ? 0 : config.dolar
  const [inputValues, setInputValues] = useState({
    min: '',
    max: ''
  })

  const setSelectedCategory = (value) => {
    setColumnFilters((prev) => {
      return prev.map((filter) => {
        if (filter.id === 'categorie_slug') {
          return {
            ...filter,
            value: value === null ? "" : value,
          }
        }
        return filter
      })
    })
  }

  const minHandle = (value) => {
    setInputValues(prev => ({ ...prev, min: value }))
    setColumnFilters((prev) => {
      return prev.map((filter) => {
        if (filter.id === 'price') {
          const numericValue = parseFloat(value) || 0
          const convertedValue = currency === 'BS' && dolar ?
            numericValue / dolar :
            value
          return {
            ...filter,
            value: [convertedValue, filter.value[1] || ''],
          }
        }
        return filter
      })
    })
  }

  const maxHandle = (value) => {
    setInputValues(prev => ({ ...prev, max: value }))
    setColumnFilters((prev) => {
      return prev.map((filter) => {
        if (filter.id === 'price') {
          const numericValue = parseFloat(value) || 0
          const convertedValue = currency === 'BS' && dolar ?
            numericValue / dolar :
            value
          return {
            ...filter,
            value: [filter.value[0] || '', convertedValue],
          }
        }
        return filter
      })
    })
  }

  const resetFilters = () => {
    handleSearch('')
    setInputValues({ min: '', max: '' })
    setColumnFilters([
      {
        id: "price",
        value: ["", ""]
      },
      {
        id: "categorie_slug",
        value: ""
      }
    ])
  }

  const [open, setOpen] = useState(false)

  const onOpenChange = (open) => {
    setOpen(open)
  }

  return (
    <div className="flex justify-between gap-4 px-6">
      <div className="flex items-center gap-2 w-full">
        <div className="w-1/1 md:w-1/2 xl:w-full">
          <label htmlFor="search" className="text-[10px] uppercase">
            Buscador
          </label>
          <div className="relative">
            <Input
              id="search"
              placeholder="Nombre, palabras clave, categoría, marca, precio..."
              value={searchTerm}
              className="mt-2"
              onChange={(e) => handleSearch(e.target.value)}
            />
            {
              searchTerm.length > 0 && (
                <div className="top-[7px] right-2 absolute bg-accent p-1 rounded-full text-accent-foreground cursor-pointer" onClick={() => handleSearch('')}>
                  <XIcon size={15} />
                </div>
              )
            }
          </div>

        </div>
        <div className="w-1/3 md:w-1/4 xl:w-1/3">
          <label htmlFor="category" className="text-[10px] uppercase">
            Categoría
          </label>
          <Select value={columnFilters[1].value} onValueChange={setSelectedCategory}>
            <SelectTrigger id="category" className="mt-2 w-full">
              <SelectValue
                placeholder="Seleccionar categoría"
                className="uppercase"
              />
            </SelectTrigger>
            <SelectContent>
              <div key="category-dialog-container" className="my-2 w-full text-center">
                <CategoryDialog key="category-dialog" />
              </div>
              <SelectItem
                value={null}
                className="uppercase"
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="text-xs">Todas</div>
                </div>
              </SelectItem>
              {categories.map((category) => (
                <SelectItem
                  key={category.name}
                  value={category.slug_url}
                  className="uppercase"
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="text-xs">{category.name}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="hidden sm:block w-1/3 md:w-1/3">
          <label htmlFor="category" className="text-[10px] uppercase">
            Rango precios
          </label>
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="number"
              value={inputValues.min || columnFilters[0].value[0] || ''}
              onChange={(e) => minHandle(e.target.value)}
              placeholder="Mínimo"
              step="0.01"
              min="0"
            />
            <Input
              type="number"
              value={inputValues.max || columnFilters[0].value[1] || ''}
              onChange={(e) => maxHandle(e.target.value)}
              placeholder="Máximo"
              step="0.01"
              min="0"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end gap-2">
        {columnFilters.some((filter) => filter.value[0] || filter.value[1] || searchTerm !== '') && (
          <Button
            variant="outline"
            className="relative bg-primary! overflow-hidden text-white/60!"
            onClick={resetFilters}
          >
            <BrushCleaningIcon />
            <div className="top-0 left-0 absolute bg-secondary opacity-0 rounded-md w-full h-full scale-150 animate-pulse" />
          </Button>
        )}
        <Link to="/productos/nuevo">
          <Button variant="outline" className="cursor-pointer text-foreground/80 bg-background! p-2 px-3 border border-slate-200 dark:border-slate-700 hover:bg-primary/20! hover:text-foreground transition-all duration-300 rounded-md">
            <PlusIcon />
          </Button>
        </Link>
        <CalculateProducts open={open} onOpenChange={onOpenChange} />
      </div>
    </div>
  )
}
