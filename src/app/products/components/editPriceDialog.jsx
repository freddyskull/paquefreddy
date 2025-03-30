import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { CurrencySelector } from './filters/currencySelector'
import { productSchema } from '@/features/validations/productoSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormInput } from '@/components/formInput'
import { useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useProductsStore } from '@/features/store/productsStore'

export const EditPriceDialog = ({ editPriceState, setEditPriceState, data, currency, dollar, changeCurrency }) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: { ...data }
  })
  const { toast } = useToast()
  const { editProduct } = useProductsStore()
  const onEditPriceProduct = (formData) => {
    const price = currency === 'usd' ? formData.price : formData.price / dollar
    const handleSuccessMessage = (message) => {
      toast({ title: message })
    }
    const newdata = {
      ...formData,
      id: data.id,
      price
    }
    if (newdata.price < newdata.price_ent) {
      handleSuccessMessage(`El producto "${formData.name}" no puede tener un precio menor al de entrada`)
    } else {
      editProduct(newdata)
      handleSuccessMessage(`El producto "${formData.name}" ha sido editado`)
      setEditPriceState(false)
    }
  }

  useEffect(() => {
    if (currency === 'usd') {
      setValue('price', data.price.toFixed(2))
    } else {
      setValue('price', (data.price * dollar).toFixed(2))
    }
  }, [currency])

  return (
    <Dialog open={editPriceState} onOpenChange={setEditPriceState}>
      <DialogContent className='sm:max-w-md'>
        <form onSubmit={handleSubmit(onEditPriceProduct)}>
          <DialogHeader>
            <DialogTitle className={currency === 'usd' ? 'text-success uppercase font-bold' : 'text-primary uppercase font-bold'}>{data.name}</DialogTitle>
            <DialogDescription>
              Edita el precio de venta y luego haz click en el botón de editar precio, ten en cuenta que el precio de venta no puede ser menor que el precio de entrada.
              <br />
              <br />
              <span className='font-bold uppercase'> Precio de entrada
                <strong className={currency === 'usd' ? 'text-success ml-1' : 'text-primary ml-1'}>
                  {currency === 'usd' ? (data.price_ent).toFixed(2) : (data.price_ent * dollar).toFixed(2)}
                </strong>
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className='flex items-center space-x-2 mt-4'>
            <div className='-mb-6 w-full'>
              <FormInput
                register={register}
                label='Precio individual'
                name='price'
                placeholder='Campo requerido *'
                type='number'
                error={errors}
              />
            </div>
            <div>
              <Label htmlFor='currency'>
                Moneda
              </Label>
              <CurrencySelector currency={currency} id='currency' changeCurrency={changeCurrency} />
            </div>
          </div>
          <DialogFooter className='sm:justify-start mt-6'>

            <Button type='submit' className='bg-warn hover:bg-warn/50 text-white'>
              editar precio
            </Button>
            <DialogClose asChild>
              <Button type='button' variant='secondary'>
                Cancelar
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

  )
}
