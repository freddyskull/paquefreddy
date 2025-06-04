import React, { useEffect, useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { useConfigStore } from '@/store/configStore'

export const DolarPriceDialog = ({ children, priceDolar }) => {
  const [open, setOpen] = useState(false)
  const [price, setPrice] = useState(priceDolar || 0)
  const [externalDolar, setExternalDolar] = useState({})
  const { updateDolarPrice } = useConfigStore()

  const handleSave = () => {
    updateDolarPrice({ dolar: price })
    setOpen(false)
  }

  useEffect(() => {
    axios.get("https://ve.dolarapi.com/v1/dolares")
      .then(response => {
        setExternalDolar(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar precio del dólar</DialogTitle>

          Ingresa el nuevo precio del dólar
          <div className='flex justify-between items-center mt-2'>
            <a href="https://www.bcv.org.ve/" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-1 font-bold text-md hover:underline" >
                {/* BCV image: light/dark */}
                <img
                  src="/bcv.png"
                  alt="bcv-inverse"
                  width={30}
                  className="dark:hidden block"
                />
                <img
                  src="/bcv-inverse.png"
                  alt="bcv"
                  width={30}
                  className="hidden dark:block"
                />
                {externalDolar[0]?.promedio.toFixed(2) || "00.00"}
              </span>
            </a>
            <span className="text-[5px]"> | </span>
            <a href="https://www.instagram.com/monitordollarvzlar/" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-1 font-bold text-md hover:underline">
                {/* DolarToday image: light/dark */}
                <img
                  src="/dolartoday.png"
                  alt="dolartoday"
                  width={30}
                  className="dark:hidden block"
                />
                <img
                  src="/dolartoday-inverse.png"
                  alt="dolartoday-inverse"
                  width={30}
                  className="hidden dark:block"
                />
                {externalDolar[1]?.promedio.toFixed(2) || "00.00"}
              </span>
            </a>
          </div>
        </DialogHeader>
        <Input
          type="number"
          placeholder="Precio del dólar"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button onClick={handleSave}>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
