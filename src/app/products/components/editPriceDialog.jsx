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
import { Badge } from '@/components/ui/badge'

export const EditPriceDialog = ({ editPriceState, setEditPriceState, data, currency, dollar, changeCurrency }) => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
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

  const onPercent = (e, percentValue) => {
    e.preventDefault()
    const price = watch().price_ent
    const percent = price * percentValue
    currency === 'usd' ? setValue('price', (price + percent).toFixed(2)) : setValue('price', ((price + percent) * dollar).toFixed(2))
  }

  return (
    <Dialog open={editPriceState} onOpenChange={setEditPriceState}>
      <DialogContent className='sm:max-w-md'>
        <form onSubmit={handleSubmit(onEditPriceProduct)}>
          <DialogHeader>
            <DialogTitle className={currency === 'usd' ? 'text-success uppercase font-bold' : 'text-primary uppercase font-bold'}>{data.name}</DialogTitle>
            <DialogDescription>
              Edita el precio de venta del producto.
              <br />
              <br />
              <span className='font-bold uppercase'> Precio de entrada
                <strong className={currency === 'usd' ? 'text-success ml-1' : 'text-primary ml-1'}>
                  {currency === 'usd' ? (data.price_ent).toFixed(2) : (data.price_ent * dollar).toFixed(2)}
                </strong>
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className='relative flex items-center space-x-2 mt-4'>
            <div className='-mb-5 w-full'>
              <FormInput
                register={register}
                label='Precio individual'
                name='price'
                placeholder='Campo requerido *'
                type='number'
                error={errors}
              />
              <div className='-bottom-6 absolute flex items-center gap-1'>
                <Badge variant='outline' onClick={(e) => onPercent(e, 0.3)} className='text-[10px] cursor-pointer'>30%</Badge>
                <Badge variant='outline' onClick={(e) => onPercent(e, 0.4)} className='text-[10px] cursor-pointer'>40%</Badge>
                <span className='ml-2 font-bold text-[11px] text-slate-400 uppercase'>Auto-precio</span>
              </div>

            </div>
            <div>
              <Label htmlFor='currency'>
                Moneda
              </Label>
              <CurrencySelector currency={currency} id='currency' changeCurrency={changeCurrency} />
            </div>
          </div>
          <DialogFooter className='sm:justify-start mt-12'>

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
