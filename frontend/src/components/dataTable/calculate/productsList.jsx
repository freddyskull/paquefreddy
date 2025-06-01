import React from 'react';

export const ProductsList = ({ product, selectedProducts, toggleSelectedProduct }) => {

    const handleToggleProduct = (product) => {
        toggleSelectedProduct(product.id)
        
    }

    const isProductSelected = selectedProducts.some(p => p.id === product.id);

  return (
    <div 
      className={`flex w-full items-center gap-2 cursor-pointer transition-colors hover:bg-primary/20 p-2 rounded-md ${isProductSelected ? 'bg-primary/40' : ''}`}
      onClick={() => handleToggleProduct(product)}
    >
      <div
        className="h-16 w-16 rounded-md! bg-white"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <div className="w-full">
        <h1 className="line-clamp-1 font-bold">{product.name}</h1>
        <div className="flex justify-between gap-2">
          <p className="text-primary font-bold">
            {product.price_bs.toFixed(2)}
          </p>
          <p className="text-usd font-bold">{product.price.toFixed(2)}</p>
        </div>
      </div>
      
    </div>
  );
};
