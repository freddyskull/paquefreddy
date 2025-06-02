import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
import defaultImage from '/mood.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, Save, Search } from 'lucide-react';
import { useProductStore } from '@/store/productStore';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

export const NoImageProduct = ({ products }) => {
  const { patchProduct } = useProductStore();
  const [noImageProducts, setNoImageProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [image, setImage] = useState({ id: null, url: '' });

  const handleEdit = (productId) => {
    setEditingProduct(productId);
  };

  const handleImageChange = (e, productId) => {
    setImage({ url: e.target.value, id: productId });
  };

  const handleSaveImage = () => {
    patchProduct(image.id, { image: image.url });
    setEditingProduct(null);
    setImage({ id: null, url: '' });
  };

  useEffect(() => {
    const noImageProducts = products.filter((product) => !product.image);
    setNoImageProducts(noImageProducts);
  }, [products]);

  const handleCopyName = (name) => {
    navigator.clipboard.writeText(name);
    toast('Nombre copiado al portapapeles');
  };

  return (
    <Card className="bg-white dark:bg-secondary">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 text-md font-bold uppercase">
          <h2>
            Productos sin imagen
            <span className="ml-2 text-xs text-foreground/50">
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
                  src={
                    editingProduct === product.id
                      ? image.url.length > 3
                        ? image.url
                        : defaultImage
                      : defaultImage
                  }
                  className="h-18 w-18 rounded-full object-cover"
                />
                <div className="flex w-full items-center justify-between gap-2">
                  {editingProduct != product.id && (
                    <div className="w-full">
                      <div className="flex w-full items-center justify-between gap-2">
                        <h2
                          className="line-clamp-1 cursor-pointer text-base font-bold"
                          onClick={() => handleCopyName(product.name)}
                        >
                          {product.name}
                        </h2>
                      </div>
                      <p className="text-base font-bold text-foreground/50 mt-1">{product.categorie.name}</p>
                    </div>
                  )}
                  <div className="flex w-full items-center justify-end gap-2">
                    {editingProduct === product.id ? (
                      <div className="flex w-full items-end gap-2">
                        <div className="flex w-full flex-col gap-2">
                          <p
                            className="cursor-pointer font-bold"
                            onClick={() => handleCopyName(product.name)}
                          >
                            {product.name}
                          </p>
                          <Input
                            type="text"
                            placeholder="Agregar url imagen"
                            onChange={(e) => handleImageChange(e, product.id)}
                            className="w-full"
                          />
                        </div>
                        <Button
                          variant="outline"
                          className="uppercase"
                          onClick={() => handleSaveImage()}
                        >
                          <Save />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          className="uppercase"
                          size="icon"
                          onClick={() => handleEdit(product.id)}
                        >
                          <Pencil />
                        </Button>
                        <Link to={`/productos/editar/${product.slugs_url}`}>
                          <Button
                            variant="outline"
                            className="uppercase"
                            size="icon"
                          >
                            <Search />
                          </Button>
                        </Link>
                      </div>
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
