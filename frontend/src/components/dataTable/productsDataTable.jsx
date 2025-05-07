import React, { useEffect, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DateBadge } from './dateBadge';
import { useConfigStore } from '@/store/configStore';
import { Input } from '../ui/input';
import { EditableInput } from '../inputs/EditableInput';
import { EditableSelect } from '../inputs/EditableSelect';
import { Button } from '../ui/button';
import { useCategoriesStore } from '@/store/categoriesStore';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const ProductsDataTable = ({ data }) => {
  const { categories } = useCategoriesStore();
  const categoryOptions = categories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  const { config } = useConfigStore();
  const columns = [
    {
      accessorKey: 'name',
      header: 'Nombre',
      filterFn: (row, columnId, value) => {
        return value
          ? row
              .getValue(columnId)
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          : true;
      },
    },
    {
      accessorKey: 'images',
      header: 'Imagen',
    },
    {
      accessorKey: 'price',
      header: 'Precio',
      filterFn: (row, columnId, value) => {
        const price = parseFloat(row.getValue(columnId));
        const searchValue = parseFloat(value);
        return !value || isNaN(searchValue) || price === searchValue;
      },
    },
    {
      accessorKey: 'slugs',
      header: 'Slugs',
      filterFn: (row, columnId, value) => {
        return value
          ? row
              .getValue(columnId)
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          : true;
      },
    },
    {
      accessorKey: 'brand',
      header: 'Marca',
      filterFn: (row, columnId, value) => {
        return value
          ? row
              .getValue(columnId)
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          : true;
      },
    },
    {
      accessorKey: 'price_ent',
      header: 'precio entrada',
      filterFn: (row, columnId, value) => {
        const price = parseFloat(row.getValue(columnId));
        const searchValue = parseFloat(value);
        return !value || isNaN(searchValue) || price === searchValue;
      },
    },
    {
      accessorKey: 'categorie',
      header: 'categoría',
    },
    {
      accessorKey: 'createdAt',
      header: 'fecha creación',
    },
  ];
  const { currency } = useConfigStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: (newSorting) => {
      table.setSorting(newSorting);
    },
    getSortedRowModel: getSortedRowModel(),
  });

  const handleSearch = (value) => {
    const normalizedValue = value.replace(',', '.');
    setSearchTerm(value);
    table.setGlobalFilter(normalizedValue);
  };
  useEffect(() => {
    if (config?.default_categories_id) {
      setSelectedCategory(config.default_categories_id);
    }
  }, [config]);

  return (
    <Card className="h-[88vh]">
      <CardHeader>
        <div className="flex justify-between gap-4">
          <div className="flex w-full items-center gap-2">
            <div className="w-full">
              <label htmlFor="search" className="text-[10px] uppercase">
                Buscar producto
              </label>
              <Input
                id="search"
                placeholder="Nombre, palabras clave, categoría, marca, precio..."
                value={searchTerm}
                className="mt-2"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="w-80">
              <label htmlFor="category" className="text-[10px] uppercase">
                Categoría
              </label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger id="category" className="mt-2 w-full">
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value={'#'}
                    className="text-primary font-bold uppercase"
                  >
                    Crear nueva categoría
                  </SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-120">
              <label htmlFor="category" className="text-[10px] uppercase">
                Rango de precios
              </label>
              <div className="mt-2 flex items-center gap-2">
                <Input type="number" placeholder="Precio mínimo" />
                <Input type="number" placeholder="Precio máximo" />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end gap-2">
            <Button variant="outline" onClick={() => table.resetGlobalFilter()}>
              Reset
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-full overflow-y-auto">
        <div className="xs:grid-cols-1 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Card
                key={row.id}
                className="dark:bg-secondary hover:shadow-primary/10 product-card relative flex min-h-[440px] flex-col bg-white p-4 transition-shadow duration-500 hover:shadow-2xl"
              >
                <DateBadge date={row.original.createdAt} />
                <div
                  className="image relative flex h-48 w-full items-center justify-center rounded-md bg-white bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${row.original.images})` }}
                ></div>
                <div className="flex justify-center gap-2 text-center">
                  <span className="text-muted-foreground -mb-4 line-clamp-1 text-[8px] uppercase">
                    {row.original.slugs.slice(0, 3).join(', ')}
                  </span>
                </div>
                <div className="flex justify-center gap-2">
                  <div className="flex flex-col text-center">
                    <span className="text-[10px] uppercase">Categoría</span>
                    <div className="bg-primary mt-1 rounded-full px-2 text-[10px] text-white uppercase">
                      <EditableSelect
                        value={row.original.categorie.name}
                        options={categoryOptions}
                        onBlur={(e) => {
                          console.log('Categoría editada', e);
                        }}
                        placeholder="Selecciona una categoría"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-center">
                    <span className="text-[10px] uppercase">Marca</span>
                    <span className="bg-primary mt-1 rounded-full px-2 text-[10px] text-white uppercase">
                      <EditableInput
                        value={row.original.brand}
                        onBlur={(e) => {
                          console.log('Nombre editado:', e.target.value);
                        }}
                      />
                    </span>
                  </div>
                </div>

                <span className="lg:text-md -mt-2 line-clamp-2 text-center text-sm font-bold text-pretty whitespace-normal uppercase xl:text-lg">
                  <EditableInput
                    value={row.original.name}
                    onBlur={(e) => {
                      console.log('Nombre editado:', e.target.value);
                    }}
                  />
                </span>
                <div className="absolute bottom-5 left-0 grid w-full grid-cols-2 gap-4 px-2">
                  <div className="">
                    <p className="text-[10px] font-light uppercase">Venta</p>
                    <div
                      className={`text-xl font-bold ${currency === 'USD' ? 'text-usd' : 'text-primary'}`}
                    >
                      <EditableInput
                        value={
                          currency === 'USD'
                            ? row.original.price.toString().replace('.', ',')
                            : row.original.price_bs.toString().replace('.', ',')
                        }
                        type="number"
                        onBlur={(e) => {
                          console.log(
                            'Precio entrada editado:',
                            e.target.value
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-end">
                    <p className="text-[10px] font-light uppercase">Entrada</p>
                    <div className="text-xl font-bold">
                      <EditableInput
                        value={
                          currency === 'USD'
                            ? row.original.price_ent
                                .toString()
                                .replace('.', ',')
                            : row.original.price_ent_bs
                                .toString()
                                .replace('.', ',')
                        }
                        type="number"
                        onBlur={(e) => {
                          console.log(
                            'Precio entrada editado:',
                            e.target.value
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex h-[80vh] w-full items-center justify-center">
              <h1 className="text-center text-2xl font-bold uppercase">
                No hay productos disponibles
              </h1>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
