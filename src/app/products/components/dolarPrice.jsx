import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const DolarPrice = () => {
  return (
    <Dialog>
      <DialogTrigger className='flex justify-between items-center gap-2 px-2 w-full h-9'>
        <span className='uppercase'>Dolar Precio</span>
        <span className='text-white'>49 Bs</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='uppercase'>Editar precio del dolar</DialogTitle>
          <DialogDescription>
            {' '}
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-2'>
          <label htmlFor='dolar' className='uppercase'>Precio del dolar</label>
          <Input id='dolar' className='bg-white' placeholder='precio del dolar' type='number' min='1' />
        </div>
        <div className='flex gap-2'>
          <Button variant='outline'>Cancelar</Button>
          <Button>Editar</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
