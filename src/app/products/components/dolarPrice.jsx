import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useConfigStore } from '@/features/store/configStore'
import { useToast } from '@/hooks/use-toast'

export const DolarPrice = () => {
  const { config, editConfig } = useConfigStore()
  const dolar = config.item.dollar
  const [price, setPrice] = useState(dolar)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()
  const DolarPriceHandel = () => {
    const data = { id: config.item.id, dollar: parseFloat(price) }
    editConfig(data)
    setIsDialogOpen(false)
    toast({
      title: 'El precio del dolar fué editado.'
    })
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className='flex justify-between items-center gap-4 p-2 w-full h-9'>
        <span className='uppercase'>Dolar Precio</span>
        <span className='font-bold uppercase'>{dolar} BS</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='uppercase'>Editar precio del dolar</DialogTitle>
          <DialogDescription>{' '}</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-2'>
          <Input
            id='dolar'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='bg-white'
            placeholder='precio del dolar'
            type='number'
            min='1'
          />
        </div>
        <div className='flex gap-2'>
          <DialogClose asChild>
            <Button variant='outline'>Cancelar</Button>
          </DialogClose>
          <Button variant='edit' onClick={DolarPriceHandel}>
            Editar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
