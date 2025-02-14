import { formatPrice } from '@/features/formatPrice'
import { SearchX } from 'lucide-react'
import React, { useEffect } from 'react'

export const SelectedProductArea = ({ inputSearch, selectedProducts, itemsSelected, setselectedProducts, dolar, isACode, setinputSearch, setIsACode }) => {
  const toggleSelected = (product) => {
    const CloneProduct = { ...product, quantity: 1 }
    if (selectedProducts.some((item) => item.id === product.id)) {
      setselectedProducts(selectedProducts.filter((item) => item.id !== product.id))
    } else {
      setselectedProducts([...selectedProducts, CloneProduct])
    }
  }

  const addOrUpdateProductQuantity = (product) => {
    const existingProduct = selectedProducts.find(item => item.id === product.id)

    if (existingProduct) {
      const updatedProducts = selectedProducts.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      setselectedProducts(updatedProducts)
    } else {
      const newProduct = { ...product, quantity: 1 }
      setselectedProducts([...selectedProducts, newProduct])
    }
  }

  useEffect(() => {
    if (isACode === true && itemsSelected.length === 1) {
      addOrUpdateProductQuantity(itemsSelected[0])
      setinputSearch('')
      setIsACode(false)
    }
  }, [isACode, itemsSelected])

  const selectedItemClass = 'bg-primary !text-white hover:!bg-primary/80'
  return (
    <>
      {
        inputSearch.length >= 2 && (
          <div className='z-50 absolute flex flex-col gap-1 bg-white shadow-blue-500/30 shadow-lg mt-4 p-2 rounded-md w-full max-h-[500px] overflow-y-auto'>
            {
              itemsSelected.length > 0
                ? (
                  itemsSelected.map((product) => (
                    <div
                      key={product.id}
                      className={`flex transition-all cursor-pointer gap-4 hover:bg-gray-200 p-2 rounded-md ${selectedProducts.some((item) => item.id === product.id) && selectedItemClass}`}
                      onClick={() => toggleSelected(product)}
                    >
                      <div className='bg-[center_center] bg-white bg-contain bg-no-repeat shadow-md rounded-md w-[80px] h-[70px]' style={{ backgroundImage: `url('${product.image}')` }} />
                      <div className='flex flex-col justify-center w-[70%] content'>
                        <h1 className='line-clamp-2 font-bold text-sm uppercase'>
                          {product.name}
                        </h1>
                        <div className='flex justify-between gap-2'>
                          <p className={`font-bold text-sm ${selectedProducts.some((item) => item.id === product.id) ? 'text-white' : 'text-primary'}`}>{formatPrice(product.price, 'bs', dolar)} BS</p>
                          <p className={`font-bold text-sm ${selectedProducts.some((item) => item.id === product.id) ? 'text-white' : 'text-success'}`}>{formatPrice(product.price, 'usd', dolar)} USD</p>
                        </div>
                      </div>
                    </div>
                  ))
                )
                : (
                  <div className='flex flex-col justify-center items-center p-4 text-center text-primary/40'>
                    <SearchX size={50} />
                    <p className='mt-4 font-bold uppercase'>Lo que estás buscando no existe</p>
                    <p className='mt-1 text-sm'>Quizás estés escribiendo mal el producto, o lo que estás buscando no se encuenta en la base de datos.</p>
                  </div>
                )
            }
          </div>
        )
      }
    </>
  )
}
