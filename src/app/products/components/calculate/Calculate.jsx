import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Calculator, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useProductsStore } from '@/features/store/productsStore'
import { useConfigStore } from '@/features/store/configStore'
import { SelectedProductArea } from './SelectedProductArea'
import { ItemsLayout } from './ItemsLayout'
import { Total } from './Total'
import { Button } from '@/components/ui/button'

const filterProducts = (inputSearch, products) => {
  const searchQuery = inputSearch.toLowerCase()
  return products.filter((product) => {
    const productName = product.name.toLowerCase()
    const productId = product.id.toString().toLowerCase()
    const productBrand = product.brand.toString().toLowerCase()
    const productSlugs = product.slugs != null ? product.slugs.map((slug) => slug.toLowerCase()) : []

    return (
      productName.includes(searchQuery) ||
      productId.includes(searchQuery) ||
      productBrand.includes(searchQuery) ||
      productSlugs.some(slug => slug.includes(searchQuery))
    )
  })
}

export const Calculate = () => {
  const [inputSearch, setinputSearch] = useState('')
  const [selectedProducts, setselectedProducts] = useState([])
  const [isACode, setisACode] = useState(false)
  const [total, settotal] = useState(0)
  const { products } = useProductsStore()
  const { config } = useConfigStore()
  const dolar = config.item.dollar

  // Verificamos si los productos están cargados
  const items = products.load ? products.items : []

  // Filtramos los productos basándonos en el inputSearch
  const filteredProducts = filterProducts(inputSearch, items)

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }

  const searchHandler = (e) => {
    setinputSearch(e.target.value)
    const isNumericString = (str) => {
      const regex = /^\d+$/
      return regex.test(str) && str.length > 5
    }
    if (isNumericString(e.target.value)) {
      setisACode(true)
    } else {
      setisACode(false)
    }
  }

  useEffect(() => {
    settotal(calculateTotal())
  }, [selectedProducts])

  return (
    <Sheet>
      <SheetTrigger>
        <div className='bg-white btn'> <Calculator size={20} /></div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='uppercase'>
            Calcular factura
            {
              selectedProducts.length > 0 && (
                <Button className='ml-2' variant='ghost' size='sm' onClick={() => { setselectedProducts([]); setinputSearch('') }}>Limpiar</Button>
              )
            }
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <div className='relative'>
          <Input placeholder='Buscar producto...' value={inputSearch} onChange={(e) => searchHandler(e)} />
          <div className={`top-[8px] right-2 fade-in cursor-pointer ${inputSearch.length >= 2 ? 'absolute' : 'hidden'}`} onClick={() => setinputSearch('')}>
            <div variant='outline' className='flex justify-center items-center bg-slate-200 p-2 rounded-full'><X size={10} /></div>
          </div>
          <SelectedProductArea
            inputSearch={inputSearch}
            selectedProducts={selectedProducts}
            itemsSelected={filteredProducts}
            setselectedProducts={setselectedProducts}
            dolar={dolar}
            isACode={isACode}
            setinputSearch={setinputSearch}
            setIsACode={setisACode}
          />
        </div>
        <div className='relative flex flex-col mt-4 h-[86vh]'>
          <div className='bg-white rounded-md h-[90%] overflow-y-auto'>
            {
              selectedProducts.length > 0
                ? selectedProducts.map((product) => (
                  <div key={product.id}>
                    <ItemsLayout product={product} setselectedProducts={setselectedProducts} dolar={dolar} />
                  </div>
                ))
                : (
                  <div className='flex flex-col justify-center items-center px-4 h-full text-center'>
                    <div className='mb-4 text-primary/10'>
                      <Calculator size={100} />
                    </div>
                    <h1 className='mt-2 font-bold text-slate-600/50 text-2xl uppercase'>No hay productos seleccionados</h1>
                    <p className='mt-2 text-slate-800/50 text-sm'>Para comenzar a calcular una factura primero selecciona un producto, buscalo dentro del formulario y seleccionalo.</p>
                  </div>
                )
            }
          </div>
          <div className='bottom-0 absolute w-full'>
            <Total total={total} dolar={dolar} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
