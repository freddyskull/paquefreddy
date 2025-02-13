import { FormInput } from '@/components/formInput'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { Boxes, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { productSchema } from '@/features/validations/productoSchema'
import { PreviewProduct } from './previewProduct'
import { useCategoriesStore } from '@/features/store/categoriesStore'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { SlugsInput } from './filters/suglsInput'
import { AutocompleteInput } from '@/components/autoCompleteInput'
import { brands } from './autocompleteBrand'
import { useConfigStore } from '@/features/store/configStore'
import { useProductsStore } from '@/features/store/productsStore'
import { formatPrice } from '@/features/formatPrice'
import { useToast } from '@/hooks/use-toast'
import { Badge } from '@/components/ui/badge'
import { Prices } from '@/components/dataTable/Prices'

export const ProductForm = ({
  data,
  currency,
  changeCurrency,
  productActionDialog,
  setProductActionDialog
}) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: data
  })
  const { config } = useConfigStore()
  const dolar = config.item.dollar
  const [tags, setTags] = useState(data.slugs)
  const [categorie, setcategorie] = useState(data.categorie_clt)
  const { categories } = useCategoriesStore()
  const { products } = useProductsStore()
  const { addNewProduct, editProduct } = useProductsStore()
  const [tagsinputValue, settagsInputValue] = useState('')
  const [newProduct, setnewProduct] = useState(false)
  const [bundleProduct, setbundleProduct] = useState(false)
  const { toast } = useToast()
  const onSubmit = (formData) => {
    const newFormData = {
      ...formData,
      id: data.id,
      slugs: tags.length > 0 ? tags : [tagsinputValue],
      price: currency === 'usd'
        ? parseFloat(formData.price)
        : parseFloat(formData.price) / dolar,
      price_ent: currency === 'usd'
        ? parseFloat(formData.price_ent)
        : parseFloat(formData.price_ent) / dolar,
      price_bundle: currency === 'usd'
        ? parseFloat(watch().price_bundle)
        : parseFloat(watch().price_bundle) / dolar
    }

    if (newProduct) {
      editProduct(newFormData)
      toast({
        title: `El producto "${newFormData.name}" ha sido editado`
      })
      reset()
      setProductActionDialog(false)
    } else {
      if (findProduct(products, newFormData.name)) {
        toast({
          title: `El producto "${newFormData.name}" ya existe`,
          description: 'Por favor intenta con otro.'
        })
      } else {
        addNewProduct(newFormData)
        // toast({
        //   title: `El producto "${newFormData.name}" ha sido agregado`
        // })
        // reset()
      }
    }
  }

  const findProduct = (object, nombre) => {
    return object.items.find(item => item.name.toLowerCase() === nombre.toLowerCase())
  }

  useEffect(() => {
    if (data.name !== '') {
      setValue('id', data.id)
      setValue('name', data.name)
      setValue('stock', data.stock)
      setValue('image', data.image)
      setValue('categorie_clt', data.categorie_clt)
      setValue('price_ent', formatPrice(data.price_ent, currency, dolar))
      setValue('price', formatPrice(data.price, currency, dolar))
      setValue('brand', data.brand)
      setValue('bundle', data.bundle)
      setValue('price_bundle', formatPrice(data.price_bundle, currency, dolar))
      setValue('slugs', data.slugs === null ? [] : data.slugs)
      setTags(data.slugs === null ? [] : data.slugs)
      setnewProduct(true)
    }
  }, [data])

  const handleReset = () => {
    setValue('id', data.id)
    setValue('name', '')
    setValue('stock', 0)
    setValue('image', '')
    setValue('slugs', [])
    setValue('price_ent', formatPrice(0, currency, dolar))
    setValue('price', formatPrice(0, currency, dolar))
    setValue('brand', '')
    setValue('bundle', 0)
    setValue('price_bundle', formatPrice(0, currency, dolar))
    setTags([])
    setValue('categorie_clt', '')
    setcategorie(config.item.defaultCategory)
    setnewProduct(false)
  }

  // const autoprice = () => {
  //   const profit = parseFloat(config.item.profits)
  //   const percent = parseFloat(watch().price_ent) * profit // aqui se multiplica por el porcentaje de ganancia
  //   const result = parseFloat(watch().price_ent) + percent
  //   setValue('price', formatPrice(result, 'usd', dolar)) // aqui es usd debido a que necesito que sea el precio exacto
  //   if (bundleProduct) {
  //     const discountValue = parseFloat(config.item.bundle_discount)
  //     const bundleResult = result * watch().bundle
  //     const discountResult = discountValue * bundleResult
  //     setValue('price_bundle', formatPrice((bundleResult - discountResult), 'usd', dolar))
  //   }
  // }

  return (
    <Dialog open={productActionDialog} onOpenChange={setProductActionDialog}>
      <DialogTrigger>
        <div className='hidden md:flex gap-2'>
          <div className='bg-white btn'>
            <span className='hidden lg:block' onClick={() => handleReset()}>Nuevo producto</span>
            <Boxes className='lg:hidden' />
          </div>
          {
            watch().name !== '' && (
              <div className='bg-warn text-white btn pulse'>
                <RotateCcw size={18} />
              </div>
            )
          }
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-[900px]'>
        <DialogHeader>
          <DialogTitle className='flex items-center uppercase'>
            Agregar nuevo producto
            <Badge className='ml-2 cursor-pointer' onClick={() => setbundleProduct(!bundleProduct)} type='button'>
              {bundleProduct
                ? 'por paquete'
                : 'individual'}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            {' '}
          </DialogDescription>
        </DialogHeader>
        <div className='flex gap-4'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-[70%]'>
            <div className='gap-4 grid grid-cols-2'>
              <FormInput
                register={register}
                label='Nombre del producto'
                name='name'
                error={errors}
                placeholder='El nombre es requerido *'
              />
              <FormInput
                register={register}
                label='Cantidad en inventario'
                placeholder='La cantidad es requerida *'
                name='stock'
                type='number'
                error={errors}
              />
            </div>
            <div className=''>
              <FormInput
                register={register}
                label='Imágen del producto'
                name='image'
                error={errors}
                placeholder='Introduzca URL valida requerida *'
              />
            </div>
            <Prices register={register} errors={errors} bundleProduct={bundleProduct} watch={watch} setValue={setValue} dolar={dolar} />
            {/* <div className={`gap-4 grid ${bundleProduct ? 'grid-cols-4' : 'grid-cols-2'}`}>
              <div className='relative'>
                <FormInput
                  register={register}
                  label='Precio entrada'
                  placeholder='Campo requerido *'
                  name='price_ent'
                  type='text'
                  error={errors}
                />
                <div className={errors.price_ent === undefined && watch().price_ent > 0 ? 'block' : 'hidden'}>
                  <small
                    className='bottom-0 absolute text-primary hover:text-primary/80 uppercase transition-all cursor-pointer animate fade-in'
                    onClick={() => autoprice()}
                  >Asignar precio
                  </small>
                </div>
              </div>
              <div className={bundleProduct ? 'block' : 'hidden'}>
                <FormInput
                  register={register}
                  label='Cantidad por pqte'
                  name='bundle'
                  error={errors}
                  type='number'
                />
              </div>
              <FormInput
                register={register}
                label='Precio individual'
                name='price'
                placeholder='Campo requerido *'
                type='text'
                error={errors}
              />
              <div className={bundleProduct ? 'block' : 'hidden'}>
                <FormInput
                  register={register}
                  label='precio por pqte'
                  name='price_bundle'
                  error={errors}
                  type='text'
                />
              </div>
            </div> */}
            <div className='gap-4 grid grid-cols-2'>
              <div>
                <label className='mb-1 font-light text-[13px] dark:text-gray-400 uppercase'>Categorías</label>
                <Select value={categorie} onValueChange={(e) => { setValue('categorie_clt', e); setcategorie(e) }} className='w-full'>
                  <SelectTrigger>
                    <SelectValue placeholder='Selecciona una' />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      categories.items.map((item, index) => (
                        <SelectItem value={item.id} key={index}>{item.title}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                {errors.categorie_clt
                  ? (
                    <span className='text-red-500 text-xs'>{errors.categorie_clt.message}</span>
                  )
                  : (
                    <span className='opacity-0 text-xs'>ERROR</span>
                  )}
              </div>
              <AutocompleteInput
                name='brand'
                register={register}
                data={brands}
                label='Marcas'
                defaultValue={data.brand}
                setValue={setValue}
              />
            </div>
            <div>
              <SlugsInput tags={tags} setTags={setTags} tagsinputValue={tagsinputValue} settagsInputValue={settagsInputValue} />
            </div>
            <div className='flex justify-between gap-4 mt-8'>
              <div className='flex gap-2'>
                <DialogClose asChild>
                  <Button variant='outline'>Cerrar</Button>
                </DialogClose>
                <Button type='button' variant='outline' onClick={() => handleReset()}>Reiniciar</Button>
              </div>
              <Button className={newProduct ? 'bg-warn hover:bg-warn/60' : currency === 'usd' ? 'bg-success hover:bg-success/60' : 'bg-primary hover:bg-primary/50'}>
                {
                  newProduct ? 'Editar' : 'Guardar'
                }
              </Button>
            </div>
          </form>
          <div className='w-[30%]'>
            <PreviewProduct watch={watch} categories={categories.items} currency={currency} changeCurrency={changeCurrency} dolarPrice={dolar} bundleProduct={bundleProduct} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
