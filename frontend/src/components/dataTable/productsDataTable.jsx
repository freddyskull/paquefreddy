import React from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { Card, CardContent } from "@/components/ui/card";
import { DateBadge } from './dateBadge';
import { useConfigStore } from '@/store/configStore';

export const ProductsDataTable = ({ data }) => {
    const columns = [
        {
            accessorKey: 'name',
            header: 'Nombre',
        },
        {
            accessorKey: 'images',
            header: 'Imagen',
            cell: info => (
                <div className="w-full h-48 overflow-hidden rounded-lg">
                    <img 
                        src={info.getValue()} 
                        alt={info.row.original.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>
            )
        },
        {
            accessorKey: 'price',
            header: 'Precio',
            cell: info => `$${info.getValue()}`,
        },
        {
            accessorKey: 'price_ent',
            header: 'price_ent',
        },
        {
            accessorKey: 'categorie',
            header: 'categorie',
        },
        {
            accessorKey: 'slugs',
            header: 'slugs',
        },
        {
            accessorKey: 'brand',
            header: 'brand',
        },
        {
            accessorKey: 'createdAt',
            header: 'createdAt',
        },
    ];

    const { currency } = useConfigStore()

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <Card className="h-[88vh] bg-secondary">
            <CardContent className="overflow-y-auto h-full">
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map(row => (
                    <Card key={row.id} className="flex flex-col py-4 px-3 relative min-h-[440px] hover:shadow-xl shadow-primary/10 transition-all product-card">    
                        <DateBadge date={row.original.createdAt} />
                        <div className="w-full h-48 bg-white rounded-md bg-contain bg-center bg-no-repeat image" style={{ backgroundImage: `url(${row.original.images})` }}></div>
                        <div className='flex justify-center gap-2 text-center'>
                            <span className="text-[8px] uppercase text-muted-foreground line-clamp-1 -mb-4">{row.original.slugs.slice(0,3).join(', ')}</span>
                        </div>
                        <div className="flex justify-center gap-2">
                            <div className="flex flex-col text-center">
                                <span className="text-[10px] uppercase">Categoría</span>
                                <span className="text-[10px] uppercase text-white bg-primary rounded-full mt-1 px-2">{row.original.categorie.name}</span>
                            </div>
                            <div className="flex flex-col text-center">
                                <span className="text-[10px] uppercase">Marca</span>
                                <span className="text-[10px] uppercase text-white bg-primary rounded-full mt-1 px-2">{row.original.brand}</span>
                            </div>
                        </div>
                        
                            <span className="text-sm -mt-2 lg:text-md xl:text-lg font-bold text-center uppercase text-pretty line-clamp-2">{row.original.name}</span>
                            <div className="grid grid-cols-2 gap-4 absolute bottom-5 left-0 w-full px-2">
                                <div className="">
                                    <p className="text-[10px] font-light uppercase text-muted-foreground">Venta</p>
                                    <p className={`text-xl font-bold ${currency === 'USD' ? 'text-success' : 'text-primary'}`}>
                                        {currency === 'USD'? row.original.price : row.original.price_bs}
                                    </p>
                                </div>
                                <div className="text-end">
                                    <p className="text-[10px] font-light uppercase text-muted-foreground">Entrada</p>
                                    <p className="text-xl text-muted-foreground font-bold">
                                            {currency === 'USD'? row.original.price_ent : row.original.price_ent_bs}
                                    </p>
                                </div>
                            </div>
                    </Card>
                    ))
                    ) : (
                        <div className="w-full h-[80vh] flex items-center justify-center col-span-full">
                            <h1 className="text-2xl font-bold text-center uppercase">No hay productos disponibles</h1> 
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
