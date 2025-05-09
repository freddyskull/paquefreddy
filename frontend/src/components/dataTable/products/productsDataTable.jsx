import React, { useEffect, useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { Card, CardContent } from '@/components/ui/card';
import { DateBadge } from '@/components/dataTable/products/dateBadge';
import { useConfigStore } from '@/store/configStore';
import { EditableInput } from '@/components/inputs/EditableInput';
import { EditableSelect } from '@/components/inputs/EditableSelect';
import { useCategoriesStore } from '@/store/categoriesStore';
import { useProductStore } from '@/store/productStore';
import { FiltersTable } from '@/components/dataTable/products/filtersTable';

export const ProductsDataTable = ({ data }) => {
  const { categories } = useCategoriesStore();
  const { patchProduct } = useProductStore();

  const categoryOptions = useMemo(() => 
    categories.map((cat) => ({
      value: cat.id,
      label: cat.name,
    }))
  , [categories]);
  console.log(data)

  const { config, currency } = useConfigStore();


  const columns = useMemo(() => [
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
      header: 'price',
      filterFn: (row, columnId, value) => {
        const price = parseFloat(row.getValue(columnId));
        const searchValue = parseFloat(value);
        return !value || isNaN(searchValue) || price === searchValue;
      },
      meta: {
        filterVariant: 'range',
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
      accessorKey: 'slugs_url',
      header: 'Slugs URL',
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
      header: 'price_ent',
      meta: {
        filterVariant: 'range',
      },
    },
    {
      accessorKey: 'categorie',
      header: 'categorie',
    },
    {
      accessorKey: 'categorie_slug',
      header: 'categorie_slug',
    },
    {
      accessorKey: 'createdAt',
      header: 'fecha creación',
    },
  ], [config, currency]);

  const memoizedData = useMemo(() => data, [data]);
  const [searchTerm, setSearchTerm] = useState('');
  const [columnFilters, setColumnFilters] = useState([
    {
      id: "price",
      value: ['', '']
    },
    {
      id: "categorie_slug",
      value: ""
    }
  ]);

  const table = useReactTable({
    data: memoizedData,
    columns,
    filterFns: {},
    getCoreRowModel: getCoreRowModel(),
    
    // onSortingChange: (newSorting) => {
    //   table.setSorting(newSorting);
    // },
    state: {
      columnFilters,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
  });


  const handleSearch = (value) => {
    const normalizedValue = value.replace(',', '.');
    setSearchTerm(value);
    table.setGlobalFilter(normalizedValue);
  };
  useEffect(() => {
    if (config?.default_categories_id) {
      setColumnFilters((prev) => {
        return prev.map((filter) => {
          if (filter.id === 'categorie_slug') {
            return {
              ...filter,
              value: config.default_categories_id,
            };
          }
          return filter;
        });
      });
    }

    // setColumnFilters((prev) => {
    //   return prev.map((filter) => {
    //     if (filter.id === 'categorie_slug') {
    //       return {
    //         ...filter,
    //         value: selectedCategory,
    //       };
    //     }
    //     return filter;
    //   });
    // });
  }, [config]);

  const handleEdit = (label, value, productId) => {
    const updatedProduct = {
      [label]: value,
      currency: currency,
    };
    if (value !== '' || value !== null || value !== undefined) {
      patchProduct(productId, updatedProduct);
    }
  };

  return (
    <Card className="h-[88vh]">
      <FiltersTable
        categories={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <CardContent className="h-full overflow-y-auto">
        <div className="xs:grid-cols-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
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
                <div className="flex items-center justify-center gap-2">
                  <div className="flex flex-col text-center">
                    {row.original.categorie && (
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase">
                            Categoría
                          </span>
                          <div className="bg-primary mt-1 rounded-full p-1 px-2 text-[10px] text-white uppercase">
                            <EditableSelect
                              value={row.original.categorie.name}
                              options={categoryOptions}
                              onBlur={(e) => {
                                handleEdit('categorie', e, row.original.id);
                              }}
                              placeholder="Selecciona una categoría"
                            />
                          </div>
                        </div>
                        {row.original.brand === null && (
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase">Marca</span>
                            <div className="bg-primary mt-1 rounded-full p-1 px-2 text-[10px] text-white uppercase">
                              <EditableInput
                                value={'N/A'}
                                onBlur={(e) => {
                                  handleEdit(
                                    'brand',
                                    e.target.value,
                                    row.original.id
                                  );
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col text-center">
                    {row.original.brand && (
                      <>
                        <span className="text-[10px] uppercase">Marca</span>
                        <div className="bg-primary mt-1 rounded-full p-1 px-2 text-[10px] text-white uppercase">
                          <EditableInput
                            value={row.original.brand}
                            onBlur={(e) => {
                              handleEdit(
                                'brand',
                                e.target.value,
                                row.original.id
                              );
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <span className="lg:text-md -mt-2 line-clamp-2 text-center text-sm font-bold text-pretty whitespace-normal uppercase xl:text-lg">
                  <EditableInput
                    value={row.original.name}
                    onBlur={(e) => {
                      handleEdit('name', e.target.value, row.original.id);
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
                          handleEdit('price', e.target.value, row.original.id);
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
                              ? row.original.price_ent
                                  .toString()
                                  .replace('.', ',')
                              : 'N/A'
                            : row.original.price_ent_bs
                              ? row.original.price_ent_bs
                                  .toString()
                                  .replace('.', ',')
                              : 'N/A'
                        }
                        type="number"
                        onBlur={(e) => {
                          handleEdit(
                            'price_ent',
                            e.target.value,
                            row.original.id
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
