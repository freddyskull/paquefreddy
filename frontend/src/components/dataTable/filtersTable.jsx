import React, { useState } from 'react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import { PlusIcon, Calculator } from 'lucide-react';
import { CategoryDialog } from '../dialogs/categoryDialog';
import { DateBadge } from './dateBadge';

export const FiltersTable = ({
  categories,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  handleSearch,
}) => {
  return (
    <div className="flex justify-between gap-4 px-6">
      <div className="flex w-full items-center gap-2">
        <div className="w-1/1 md:w-1/2 xl:w-full">
          <label htmlFor="search" className="text-[10px] uppercase">
            Buscador
          </label>
          <Input
            id="search"
            placeholder="Nombre, palabras clave, categoría, marca, precio..."
            value={searchTerm}
            className="mt-2"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="w-1/3 md:w-1/4 xl:w-1/3">
          <label htmlFor="category" className="text-[10px] uppercase">
            Categoría
          </label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger id="category" className="mt-2 w-full">
              <SelectValue
                placeholder="Seleccionar categoría"
                className="uppercase"
              />
            </SelectTrigger>
            <SelectContent>
              <div key="category-dialog-container" className="my-2 text-center">
                <CategoryDialog key="category-dialog" />
              </div>
              {categories.map((category) => (
                <SelectItem
                  key={category.name}
                  value={category.id}
                  className="uppercase"
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="text-xs">{category.name}</div>
                    {/* <div className="text-xs flex justify-end"> {category.createdAt}</div> */}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="hidden w-1/3 sm:block md:w-1/3">
          <label htmlFor="category" className="text-[10px] uppercase">
            Rango de precios
          </label>
          <div className="mt-2 flex items-center gap-2">
            <Input type="number" placeholder="Minimo" />
            <Input type="number" placeholder="Maximo" />
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end gap-2">
        <Button variant="outline">
          <PlusIcon />
        </Button>
        <Button variant="outline">
          <Calculator />
        </Button>
      </div>
    </div>
  );
};
