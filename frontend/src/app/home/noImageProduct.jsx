import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import defaultImage from '/mood.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CopyIcon, Link2, Pencil, Save, Search } from 'lucide-react'
import { useProductStore } from '@/store/productStore'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

export const NoImageProduct = ({ products }) => {
  const { patchProduct } = useProductStore()
  const [noImageProducts, setNoImageProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)
  const [image, setImage] = useState({ id: null, url: '' })

  const handleEdit = (productId) => {
    setEditingProduct(productId)
  }

  const handleImageChange = (e, productId) => {
    setImage({ url: e.target.value, id: productId })
  }


  const isValidImageUrl = (url) => {
    return (
      !!url &&
      typeof url === "string" &&
      (url.startsWith("http") ||
        url.startsWith("https") ||
        url.startsWith("data:image") ||
        url.startsWith("https://encrypted")) ||
      url.startsWith("https://www")
    )
  }

  const handleSaveImage = () => {
    patchProduct(image.id, { image: image.url })
    setEditingProduct(null)
    setImage({ id: null, url: '' })
  }

  useEffect(() => {
    const noImageProducts = products.filter((product) => !product.image)
    setNoImageProducts(noImageProducts)

  }, [products])

  const handleCopyName = (name) => {
    navigator.clipboard.writeText(name)
    toast('Nombre copiado al portapapeles')
  }

  return (
    <Card className="bg-white dark:bg-secondary">
      {
        noImageProducts.length > 0 ? (
          <div>
            <CardHeader>
              <CardTitle className="flex justify-between items-center gap-2 font-bold text-md uppercase">
                <h2 className='flex xl:flex-row md:flex-col xl:items-end'>
                  Productos sin imagen
                  <span className="xl:ml-2 text-foreground/50 text-xs">
                    Productos sin imagen: {noImageProducts.length}
                  </span>
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="group flex flex-col gap-4 w-full h-[170px] overflow-x-hidden!">

                <div className="flex flex-col gap-4 px-2 overflow-y-hidden">
                  {noImageProducts.slice(0, 5).map((product) => (
                    <div key={product.id} className="flex items-center gap-6 w-full">
                      <img
                        src={
                          editingProduct === product.id
                            ? image.url.length > 3
                              ? image.url
                              : defaultImage
                            : defaultImage
                        }
                        className="rounded-full w-14 xl:w-18 h-14 xl:h-18 object-cover"
                      />
                      <div className="flex xl:flex-row flex-col xl:justify-between xl:items-center gap-4 w-full">
                        {editingProduct != product.id && (
                          <div className="w-full">
                            <div className="flex justify-between items-center gap-2 w-full">
                              <h2
                                className="gap-2 font-bold text-base line-clamp-1 text-nowrap cursor-pointer"
                                onClick={() => handleCopyName(product.name)}
                              >
                                {product.name}
                              </h2>
                              <div className='flex items-center'>
                                <CopyIcon className="ml-2 cursor-pointer" size={15} onClick={() => handleCopyName(product.name)} />
                                <Link
                                  className="ml-2 cursor-pointer"
                                  size={15}
                                  onClick={() =>
                                    window.open(
                                      `https://www.bing.com/images/search?q=${encodeURIComponent(
                                        product.name
                                      )}`,
                                      '_blank'
                                    )
                                  }
                                >
                                  <Link2 />
                                </Link>
                              </div>
                            </div>
                            <p className="hidden xl:block mt-1 font-bold text-foreground/50 text-base">{product.categorie.name}</p>
                          </div>
                        )}
                        <div className={`${editingProduct === product.id ? 'w-full!' : ''} flex xl:justify-end items-start gap-2`}>
                          {editingProduct === product.id ? (
                            <div className="flex items-end gap-2 w-full">
                              <div className="flex flex-col gap-2 w-full">
                                <p
                                  className="font-bold cursor-pointer"
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
          </div>
        ) : (
          <div className='h-full'>
            <CardContent className="flex flex-col justify-center items-center h-full text-center">
              <p className="font-bold text-foreground text-xl uppercase">No hay productos sin imagen</p>
              <p className='mt-2'>En esta sección aparecerán los productos que tengan algún problema con su imágen destacada y pordrás editarlas directamente.</p>
            </CardContent>
          </div>
        )
      }
    </Card>
  )
}
