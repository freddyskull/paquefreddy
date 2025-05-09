import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useCategoriesStore } from '@/store/categoriesStore';

export const CategoryDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const { createCategory } = useCategoriesStore();

  const handleCreateCategory = () => {
    if (categoryName.trim()) {
      createCategory({ name: categoryName });
      setCategoryName('');
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCreateCategory();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-primary">
          Nueva categoría
        </Button>
      </DialogTrigger>
      <DialogDescription>
      </DialogDescription>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nueva Categoría</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Input
              id="categoryName"
              placeholder="Nombre de la categoría"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              onKeyDown={handleKeyDown}
              className="mt-2"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleCreateCategory}>
              Crear
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
