import React from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

export const DataTable = ({ columns, data }) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })

  return (
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4'>
        {table.getRowModel().rows.map(row => (
          <div key={row.id} className='product-container'>
            {row.getVisibleCells().map(cell => (
              <div key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
  
  );
};

