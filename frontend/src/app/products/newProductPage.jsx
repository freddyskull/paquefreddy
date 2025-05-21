import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import { Card, CardContent } from '@/components/ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useCategoriesStore } from '@/store/categoriesStore'
import { useConfigStore } from '@/store/configStore'
import { useSuppliersStore } from '@/store/suppliersStore'
import { ProductForm } from './components/productForm'
import { DateBadge } from '@/components/dataTable/products/dateBadge'
import defaultImage from '/default-img.jpg'
import { UnityBadge } from '@/components/dataTable/products/unityBadge'
import { useProductStore } from '@/store/productStore'
import { useNavigate } from 'react-router-dom'

const productSchema = z
  .object({
    name: z.string().min(2, 'tener al menos 2 caracteres'),
    stock: z.number().min(0, 'debe ser mayor o igual a 0'),
    status: z.boolean().optional(),
    sell_unity: z.boolean().optional(),
    price: z.number().min(0, 'debe ser mayor o igual a 0'),
    price_ent: z.number().min(0, 'debe ser mayor o igual a 0'),
    slugs: z.array(z.string()).default(null),
    image: z.string().optional(),
    brand: z.string().optional(),
    bundle: z.number().optional(),
    expiration: z.string().optional(),
    unity: z.string().optional(),
    supplier_id: z.number().optional(),
    categorie_id: z.number().optional(),
  })
  .refine((data) => data.price > data.price_ent, {
    message: 'debe ser mayor al precio de entrada',
    path: ['price'],
  })

export const NewProductPage = () => {
  const navigate = useNavigate()
  const { categories, isLoading: isLoadingCategories } = useCategoriesStore()
  const { config, currency } = useConfigStore()
  const { suppliers, isLoading: isLoadingSuppliers } = useSuppliersStore()
  const { createProduct } = useProductStore()
  // const [slugs, setSlugs] = useState(['caramelos', 'dulces', 'barato', 'nano'])
  const [slugs, setSlugs] = useState([])
  const defaultCategory = categories.find(
    (category) => category.slug_url === config.default_categories_slug
  )
  const defaultCategoryId = defaultCategory?.id
  const optionsCategories = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }))
  const optionsSuppliers = suppliers.map((supplier) => ({
    value: supplier.id,
    label: supplier.name,
  }))

  const today = new Date()
  const options = { timeZone: 'America/Caracas' }
  const venezuelaDate = today.toLocaleDateString('en-CA', options) // 'en-CA' da formato YYYY-MM-DD


  const isExpirationValid = (expiration) => {
    const expirationDate = new Date(expiration)
    return expirationDate >= new Date(venezuelaDate)
  }

  const form = useForm({
    resolver: zodResolver(productSchema),
    defaultValues:
    {
      name: '',
      stock: 0,
      status: true,
      price: 0,
      price_ent: 0,
      slugs: slugs,
      image: '',
      brand: '',
      bundle: 0,
      expiration: '',
      unity: 'und',
      supplier_id: undefined,
      categorie_id: defaultCategoryId,
    },
    // {
    //   name: 'Oka loka',
    //   stock: 10,
    //   status: true,
    //   price: 25,
    //   price_ent: 20,
    //   slugs: [],
    //   image:
    //     'https://th.bing.com/th/id/OIP.7sXZgcmN0lAWSj6Czwt5igHaHd?rs=1&pid=ImgDetMain',
    //   brand: 'Oka loka',
    //   bundle: 12,
    //   expiration: '2025-05-11',
    //   unity: 'und',
    //   supplier_id: 1,
    //   categorie_id: 1,
    //   sell_unity: false,
    //   currency: 'BS',
    // },
  })

  useEffect(() => {
    if (slugs && slugs.length > 0) {
      form.setValue('slugs', slugs)
    }
  }, [form, slugs])


  const onSubmit = async (data) => {
    try {
      const tagsInput = document.querySelector('input[name="slugs"]')
      const currentInput = tagsInput?.value?.trim()
      let finalSlugs = [...slugs]
      if (currentInput) {
        finalSlugs = [...new Set([...slugs, currentInput])]
        setSlugs(finalSlugs)
        form.setValue('slugs', finalSlugs)
        if (tagsInput) tagsInput.value = ''
      }
      const newProduct = {
        ...data,
        slugs: finalSlugs,
        currency: localStorage.getItem('currency'),
      }
      createProduct(newProduct)
      form.reset()
      setSlugs([])
      setTimeout(() => {
        navigate('/productos')
      }, 300)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }
  const product = form.watch()
  return (
    <Layout>
      <Card>
        <CardContent>
          <div className="flex gap-4">
            <div className="w-full">
              <ProductForm
                form={form}
                onSubmit={onSubmit}
                optionsCategories={optionsCategories}
                optionsSuppliers={optionsSuppliers}
                defaultCategoryId={defaultCategoryId}
                slugs={slugs}
                setSlugs={setSlugs}
                isLoadingCategories={isLoadingCategories}
                isLoadingSuppliers={isLoadingSuppliers}
              />
            </div>
            <div className="hidden xl:flex flex-col items-center md:w-[40%] 2xl:w-1/4">
              <h2 className="mb-4 font-bold text-2xl text-center uppercase">
                Previsualizacion
              </h2>
              <Card
                id="card-product"
                className={`bg-white dark:bg-secondary  hover:shadow-primary/20 product-card relative flex min-h-[440px] w-full flex-col rounded-lg p-4 dark:text-white transition-shadow duration-500 hover:shadow-lg ${!isExpirationValid(product.expiration) && product.expiration !== "" ? 'border-2 border-amber-700' : 'border-gray-300 dark:border-gray-700'}`}
              >
                <div className="top-5 left-0 absolute flex justify-between gap-2 px-4 w-full">
                  <div className="-ml-2">
                    <DateBadge date={new Date().toISOString()} />
                  </div>
                  <UnityBadge unity={product.unity} />
                </div>
                <div
                  className="relative flex justify-center items-center bg-white bg-contain bg-no-repeat bg-center border-gray-500 border-b rounded-md w-full h-48 image"
                  style={{
                    backgroundImage: `url(${product.image.length <= 3 ? defaultImage : product.image})`,
                  }}
                ></div>
                <div className="flex flex-col items-center mt-4">
                  <span className="text-gray-400 text-xs uppercase line-clamp-1">
                    {product.slugs.slice(0, 3).join(', ')}
                  </span>
                  <h3 className="mt-2 font-bold text-lg text-center uppercase">
                    {product.name || 'Nombre del Producto'}
                  </h3>
                  <div className="flex gap-2 mt-2">
                    <div className="flex flex-col justify-center items-center text-center">
                      <span className="text-[10px] uppercase">Marca</span>
                      <div
                        className={`mt-1 min-w-[40px] rounded-full p-1 px-2 text-[10px] text-white uppercase ${currency === 'BS' ? 'bg-primary' : 'bg-usd'}`}
                      >
                        {product.brand || 'N/A'}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                      <span className="text-[10px] uppercase">Proveedor</span>
                      <div
                        className={`mt-1 min-w-[40px] rounded-full p-1 px-2 text-[10px] text-white uppercase ${currency === 'BS' ? 'bg-primary' : 'bg-usd'}`}
                      >
                        {suppliers.find((sup) => sup.id === product.supplier_id)
                          ?.name || 'N/A'}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                      <span className="text-[10px] uppercase">Categoria</span>
                      <div
                        className={`mt-1 min-w-[40px] rounded-full p-1 px-2 text-[10px] text-white uppercase ${currency === 'BS' ? 'bg-primary' : 'bg-usd'}`}
                      >
                        {categories.find(
                          (cat) => cat.id === product.categorie_id
                        )?.name || 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-left">
                    <span className="block text-gray-400 text-sm">Venta</span>
                    <span
                      className={`text-lg font-bold ${currency === 'BS' ? 'text-primary' : 'text-usd'}`}
                    >
                      {product.price || 0}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-400 text-sm">Entrada</span>
                    <span className={`text-lg font-bold text-gray-400`}>
                      {product.price_ent || 0}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  )
}
