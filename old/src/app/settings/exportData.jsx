/* eslint-disable indent */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Database, Table } from 'lucide-react'
import React from 'react'

export const ExportData = () => {
  const options = ['Lista de productos', 'lista de categorías']
  const onExportHandle = (exportData, format) => {
    switch (exportData) {
      case 'Lista de productos':
        console.log(`exportar productos ${format}`)
        break
      case 'lista de categorías':
        console.log(`exportar categorías ${format}`)
        break
    }
  }
  const syleBox = 'flex justify-center items-center hover:bg-primary/20 w-full rounded-xl h-[100px] hover:text-primary font-bold uppercase flex gap-1 transition-all bg-slate-300 shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer'
  return (
    <div className='flex flex-col bg-white shadow-md p-1 rounded-md'>
      <Dialog>
        {
          options.map((item) => (
            <div key={item}>
              <DialogTrigger>Open</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='font-bold text-center uppercase'>Exportar datos de {item}</DialogTitle>
                  <DialogDescription className='text-center'>Seleccione en que formato exportar los datos</DialogDescription>
                </DialogHeader>
                <div className='flex justify-around gap-2 mt-4'>
                  <div className={syleBox} onClick={() => onExportHandle(item, 'EXCEL')}>
                    <Table size={18} />
                    Excel
                  </div>
                  <div className={syleBox} onClick={() => onExportHandle(item, 'JSON')}>
                    <Database size={18} />
                    JSON
                  </div>
                </div>
              </DialogContent>
            </div>
            // <Button key={item} className='bg-white font-bold text-slate-500 hover:text-white' onClick={() => onExportHandle(item)}>
            //   <div className='flex justify-between items-center gap-4 w-full'>
            //     <div className='text-[13px] uppercase'>{item}</div>
            //   </div>
            // </Button>
          ))
        }
      </Dialog>

      {/* <Button className='bg-white font-bold text-slate-500 hover:text-white'>
        <div className='flex justify-between items-center gap-4 w-full'>
          <div className='text-[13px] uppercase'>proveedores</div>
        </div>
      </Button>
      <Button className='bg-white font-bold text-slate-500 hover:text-white'>
        <div className='flex justify-between items-center gap-4 w-full'>
          <div className='text-[13px] uppercase'>ventas</div>
        </div>
      </Button>
      <Button className='bg-white font-bold text-slate-500 hover:text-white'>
        <div className='flex justify-between items-center gap-4 w-full'>
          <div className='text-[13px] uppercase'>Lista negra</div>
        </div>
      </Button>
      <Button className='bg-white font-bold text-slate-500 hover:text-white'>
        <div className='flex justify-between items-center gap-4 w-full'>
          <div className='text-[13px] uppercase'>proveedores</div>
        </div>
      </Button> */}
    </div>

  )
}
