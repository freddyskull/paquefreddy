import React from 'react'

export const ProductsList = ({ product, selectedProducts, toggleSelectedProduct }) => {

  const handleToggleProduct = (product) => {
    toggleSelectedProduct(product.id)

  }

  const isProductSelected = selectedProducts.some(p => p.id === product.id)
  console.log(selectedProducts)
  return (
    <div
      className={`flex w-full items-center gap-2 cursor-pointer transition-colors hover:bg-primary/20 p-2 rounded-md ${isProductSelected ? 'bg-primary/40' : ''}`}
      onClick={() => handleToggleProduct(product)}
    >
      <div
        className="bg-white rounded-md! w-16 h-16"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <div className="w-full">
        <h1 className="font-bold line-clamp-1">{product.name}</h1>
        <div className="flex justify-between gap-2">
          <p className="font-bold text-primary">
            {product.price_bs.toFixed(2)}
          </p>
          <p className="font-bold text-usd">{product.price.toFixed(2)}</p>
        </div>
      </div>

    </div>
  )
}
