import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
import defaultImage from '/mood.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Save } from 'lucide-react';
import { useProductStore } from '@/store/productStore';

export const NoImageProduct = ({ products }) => {
  const { updateProduct } = useProductStore()
  const [noImageProducts, setNoImageProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [image, setImage] = useState({id: null, url: ''});

  const handleEdit = (productId) => {
    setEditingProduct(productId);
  };

  const handleImageChange = (e, productId) => {
    setImage({url: e.target.value, id:productId});
  };

  const handleSaveImage = () => {
    updateProduct({id: image.id, image: image.url})
    setEditingProduct(null);
    setImage({id: null, url: ''});
  }

  useEffect(() => {
    const noImageProducts = products.filter((product) => !product.image);
    setNoImageProducts(noImageProducts);
  }, [products])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 text-xl font-bold uppercase">
          <h2>
            Productos sin imagen{' '}
            <span className="text-foreground/50 text-xs">
              Productos sin imagen: {noImageProducts.length}
            </span>
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="group flex h-[140px] w-full flex-col gap-4">
          <style jsx global>
            {`
              .group:hover > div {
                overflow-y: auto;
              }
            `}
          </style>
          <div className="flex flex-col gap-4 overflow-y-hidden px-2">
            {noImageProducts.slice(0, 5).map((product) => (
              <div key={product.id} className="flex w-full items-center gap-6">
                <img
                  src={defaultImage}
                  alt={product.name}
                  className="h-18 w-18 rounded-full object-cover"
                />
                <div className="flex w-full items-center justify-between gap-2">
                  <div className="w-full">
                    <div className="flex w-full items-center justify-between gap-2">
                      <h2 className="line-clamp-1 text-base font-bold">
                        {product.name}
                      </h2>
                    </div>
                    <p className="text-foreground/50 mt-1 text-base font-bold">
                      BS {product.price_bs.toFixed(2)} | USD{' '}
                      {product.price.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    {editingProduct === product.id ? (
                      <div className='flex gap-2 w-[200px]'>
                        <Input
                          type="text"
                          placeholder="Agregar url imagen"
                          onChange={(e) => handleImageChange(e, product.id)}
                          className="w-full"
                        />
                        <Button
                        variant="outline"
                        className="uppercase"
                        onClick={() => handleSaveImage()}
                        >
                            <Save/>
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        className="uppercase"
                        onClick={() => handleEdit(product.id)}
                      >
                        Editar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
