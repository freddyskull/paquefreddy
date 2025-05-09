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
  columnFilters,
  setColumnFilters,
  handleSearch,
}) => {
  const setSelectedCategory = (value) => {
    setColumnFilters((prev) => {
      return prev.map((filter) => {
        if (filter.id === 'categorie_slug') {
          return {
            ...filter,
            value: value === null ? "" : value,
          };
        }
        return filter;
      });
    });
  };
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
          <Select value={columnFilters[1].value} onValueChange={setSelectedCategory}>
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
        <div className="hidden w-1/3 sm:block md:w-1/3">
          <label htmlFor="category" className="text-[10px] uppercase">
            Rango de precios
          </label>
          <div className="mt-2 flex items-center gap-2">
            <Input type="number" value={columnFilters[0].value[0] || ''} onChange={(e) => setColumnFilters((prev) => {
              return prev.map((filter) => {
                if (filter.id === 'price') {
                  return {
                    ...filter,
                    value: [e.target.value, filter.value[1] || ''],
                  };
                }
                return filter;
              });
            })} placeholder="Minimo" />
            <Input type="number" value={columnFilters[0].value[1] || ''} onChange={(e) => setColumnFilters((prev) => {
              return prev.map((filter) => {
                if (filter.id === 'price') {
                  return {
                    ...filter,
                    value: [filter.value[0] || '', e.target.value],
                  };
                }
                return filter;
              });
            })} placeholder="Maximo" />
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
