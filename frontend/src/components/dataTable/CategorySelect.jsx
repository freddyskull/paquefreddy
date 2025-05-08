import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from '@/components/ui/select';
import { CategoryDialog } from '../dialogs/categoryDialog';

export const CategorySelect = ({ categories, selectedCategoryState, setSelectedCategoryState, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (value) => {
    setSelectedCategoryState(value);
    onCategoryChange(value);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showSearch = categories.length > 6;
  return (
    <Select value={selectedCategoryState} onValueChange={handleCategoryChange}>
      <SelectTrigger className="mt-2 w-full">
        <SelectValue placeholder="Seleccionar categoría" className="uppercase" />
      </SelectTrigger>
      <SelectContent>
        {showSearch && (
          <div className="flex items-center p-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar categoría..."
              className="flex-1 px-2 py-1 text-xs border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-1 ml-2 text-gray-500 hover:text-gray-700"
                title="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        )}
        {showSearch && <SelectSeparator />}
        <div key="category-dialog-container" className="my-2 text-center">
          <CategoryDialog key="category-dialog" />
        </div>
        {filteredCategories.length === 0 ? (
          <SelectItem disabled>
            <div className="text-xs text-gray-500">No se encontraron categorías</div>
          </SelectItem>
        ) : (
          filteredCategories.map((category) => (
            <SelectItem auto key={category.id} value={category.id} className="uppercase">
              <div className="flex justify-between items-center gap-4">
                <div className="text-xs">{category.name}</div>
              </div>
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
};
