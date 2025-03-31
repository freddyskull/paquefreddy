import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Package, RotateCcw } from 'lucide-react'
import { FormInput } from '@/components/formInput'
import { Prices } from '@/components/dataTable/Prices'
import { PreviewProduct } from './previewProduct'
import { SlugsInput } from './filters/suglsInput'
import { AutocompleteInput } from '@/components/autoCompleteInput'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { productSchema } from '@/features/validations/productoSchema'
import { useCategoriesStore } from '@/features/store/categoriesStore'
import { useConfigStore } from '@/features/store/configStore'
import { useProductsStore } from '@/features/store/productsStore'
import { useToast } from '@/hooks/use-toast'
import { brands } from './autocompleteBrand'

export const ProductForm = ({
  data,
  currency,
  changeCurrency,
  productActionDialog,
  setProductActionDialog,
  initialState,
  setdata
}) => {
  // Configuración del formulario con react-hook-form y Zod para validación
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
  const { categories } = useCategoriesStore()
  const { products, addNewProduct, editProduct } = useProductsStore()
  const { toast } = useToast()
  const dolar = config.item.dollar

  // Estados locales
  const [tags, setTags] = useState(data.slugs || [])
  const [categorie, setCategorie] = useState(data.categorie_clt)
  const [tagsInputValue, setTagsInputValue] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const [bundleProduct, setBundleProduct] = useState(false)

  // Efecto para actualizar los valores del formulario si se recibe un producto con nombre
  useEffect(() => {
    if (data.name) {
      setValue('id', data.id)
      setValue('name', data.name)
      setValue('stock', data.stock)
      setValue('image', data.image)
      setValue('categorie_clt', data.categorie_clt)
      setValue('price_ent', (currency === 'usd' ? data.price_ent : data.price_ent * dolar).toFixed(2))
      setValue('price', (currency === 'usd' ? data.price : data.price * dolar).toFixed(2))
      setValue('brand', data.brand)
      setValue('bundle', data.bundle)
      setValue('price_bundle', (currency === 'usd' ? data.price_bundle : data.price_bundle * dolar).toFixed(2))
      setValue('slugs', data.slugs || [])
      setTags(data.slugs || [])
      setIsEditMode(true)
    }
  }, [data, setValue, currency, dolar])

  // Función para resetear el formulario y los estados locales
  const handleReset = () => {
    setdata(initialState)
    setIsEditMode(false)
    setTags([])
    reset()
  }

  // Conversión de precios según la moneda seleccionada
  const convertPrice = (value) => currency === 'usd' ? value : value / dolar

  // Función para manejar el envío del formulario
  const onSubmit = (formData) => {
    const newFormData = {
      ...formData,
      id: data.id,
      slugs: tags.length > 0 ? tags : tagsInputValue ? [tagsInputValue] : null,
      price: convertPrice(formData.price),
      price_ent: convertPrice(formData.price_ent),
      price_bundle: convertPrice(watch().price_bundle)
    }

    // Función para mostrar el mensaje de éxito y cerrar el diálogo
    const handleSuccess = (message) => {
      toast({ title: message })
      reset()
      setProductActionDialog(false)
    }

    // Verificar si se trata de edición o creación de producto nuevo
    if (isEditMode) {
      editProduct(newFormData)
      handleSuccess(`El producto "${newFormData.name}" ha sido editado`)
    } else {
      // Verificar si el producto ya existe
      const productExists = products.items.find(
        (item) => item.name.toLowerCase() === newFormData.name.toLowerCase()
      )
      if (productExists) {
        toast({
          title: `El producto "${newFormData.name}" ya existe`,
          description: 'Por favor intenta con otro.'
        })
      } else {
        addNewProduct(newFormData)
        handleSuccess(`El producto "${newFormData.name}" ha sido agregado`)
      }
    }
  }

  return (
    <Dialog open={productActionDialog} onOpenChange={setProductActionDialog}>
      <DialogTrigger>
        <div className='hidden xl:flex gap-2'>
          <div onClick={handleReset} className='bg-white btn'>
            <Package size={20} />
          </div>
          {watch().name && (
            <div className='bg-warn text-white btn pulse'>
              <RotateCcw size={18} />
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-[900px]'>
        <DialogHeader>
          <DialogTitle className='flex items-center uppercase'>
            Agregar nuevo producto
            <Badge className='ml-2 cursor-pointer' onClick={() => setBundleProduct(!bundleProduct)}>
              {bundleProduct ? 'por paquete' : 'individual'}
            </Badge>
          </DialogTitle>
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
                name='stock'
                type='number'
                error={errors}
                placeholder='La cantidad es requerida *'
              />
            </div>
            <FormInput
              register={register}
              label='Imágen del producto'
              name='image'
              error={errors}
              placeholder='Introduzca URL válida *'
            />
            <Prices
              register={register}
              errors={errors}
              bundleProduct={bundleProduct}
              watch={watch}
              setValue={setValue}
              dolar={dolar}
            />
            <div className='gap-4 grid grid-cols-2'>
              <div>
                <label className='mb-1 font-light text-[13px] dark:text-gray-400 uppercase'>Categorías</label>
                <Select
                  value={categorie}
                  onValueChange={(value) => {
                    setValue('categorie_clt', value)
                    setCategorie(value)
                  }}
                  className='w-full'
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Selecciona una' />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.items.map((item) => (
                      <SelectItem value={item.id} key={item.id}>
                        {item.title}
                      </SelectItem>
                    ))}
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
            <SlugsInput
              tags={tags}
              setTags={setTags}
              tagsinputValue={tagsInputValue}
              settagsInputValue={setTagsInputValue}
            />
            <div className='flex justify-between gap-4 mt-8'>
              <div className='flex gap-2'>
                <DialogClose asChild>
                  <Button variant='outline'>Cerrar</Button>
                </DialogClose>
                <Button type='button' variant='outline' onClick={handleReset}>
                  Reiniciar
                </Button>
              </div>
              <Button
                className={
                  isEditMode
                    ? 'bg-warn hover:bg-warn/60'
                    : currency === 'usd'
                      ? 'bg-success hover:bg-success/60'
                      : 'bg-primary hover:bg-primary/50'
                }
              >
                {isEditMode ? 'Editar' : 'Guardar'}
              </Button>
            </div>
          </form>
          <div className='w-[30%]'>
            <PreviewProduct
              watch={watch}
              categories={categories.items}
              currency={currency}
              changeCurrency={changeCurrency}
              dolarPrice={dolar}
              bundleProduct={bundleProduct}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
