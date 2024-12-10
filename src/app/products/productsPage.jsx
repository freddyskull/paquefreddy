/* eslint-disable no-undef */
import { useEffect, useMemo, useState } from 'react'
import { useProductsStore } from '../../features/productsStore'
import { ProductsSkeleton } from './skeleton/ProductsSkeleton'
import { DataTable } from '@/components/dataTable/dataTable'
import { Badge } from '@/components/ui/badge'
import { formatDistanceInDays } from '@/features/dateReturn'
import { formatPrice } from '@/features/formatPrice'
import { Sparkles } from 'lucide-react'
import { ProductsFilters } from './components/filters/productsFilters'
import { useConfigStore } from '@/features/configStore'

export const ProductsPage = () => {
  const { getProducts, products } = useProductsStore()
  const { getConfig, config } = useConfigStore()
  const [currency, setcurrency] = useState(localStorage.getItem('currency'))
  useEffect(() => {
    getProducts()
    getConfig()
    const storedCurrency = localStorage.getItem('currency')
    if (storedCurrency) {
      setcurrency(storedCurrency)
    } else {
      localStorage.setItem('currency', 'bs')
      setcurrency('bs')
    }
  }, [])
  const dollar = config.item.dollar
  const changeCurrency = (newCurrency) => {
    setcurrency(newCurrency)
    localStorage.setItem('currency', newCurrency)
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'image',
        header: 'Imágen',
        classname: 'text-center',
        enableFiltering: false,
        cell: info => (
          <div
            className='z-0 mt-2 image'
            style={{ backgroundImage: `url(${info.getValue()})` }}
          />
        )
      },
      {
        accessorKey: 'created',
        header: 'Fecha de creacion',
        cell: info => (
          <>
            {formatDistanceInDays(new Date(), info.getValue()) === 'nuevo'
              ? (
                <Badge className={`flex gap-1 badge-date ${currency === 'usd' && 'bg-success hover:bg-success/80'}`}>
                  <Sparkles width={15} />
                  {formatDistanceInDays(new Date(), info.getValue())}
                </Badge>
              )
              : (
                <Badge variant='outline' className='badge-date'>
                  {formatDistanceInDays(new Date(), info.getValue())}
                </Badge>
              )}
          </>
        )
      },
      {
        accessorKey: 'updated',
        header: 'Editado recientemente',
        cell: info => (
          <>
            {formatDistanceInDays(new Date(), info.getValue()) === 'nuevo' &&
              (
                <div className='bg-amber-500 animate-pulse-wave badge-edit' />
              )}
          </>
        )
      },
      {
        accessorKey: 'name',
        header: 'Nombre del Producto',
        cell: info => (
          <div className={`md:line-clamp-2 h-14 flex items-center text-center text-lg ${currency === 'bs' ? 'hover:text-primary' : 'hover:text-success'} title`}>
            {info.getValue()}
          </div>
        )
      },
      {
        accessorKey: 'slugs',
        header: 'Etiquetas',
        cell: info => (
          <SlugsComponent itemsList={info.getValue()} />
        )
      },
      {
        accessorKey: '@expand',
        header: 'Atributos',
        cell: ({ row }) => (
          <div className='flex justify-center gap-2 my-4'>
            {
              row.original['@expand'] !== undefined
                ? (
                  <div className='flex flex-col items-center gap-1'>
                    <span className='font-bold text-[8px] uppercase'>Categoría</span>
                    <Badge variant='outline'>
                      {row.original['@expand'].categorie_clt.title}
                    </Badge>
                  </div>
                )
                : (
                  <div className='flex flex-col items-center gap-1'>
                    <span className='font-bold text-[8px] uppercase'>Categoría</span>
                    <Badge variant='outline'>
                      N/A
                    </Badge>
                  </div>
                )
            }
            {
              row.original.brand
                ? (
                  <div className='flex flex-col items-center gap-1'>
                    <span className='font-bold text-[8px] uppercase'>Marca</span>
                    <Badge variant='outline' className='line-clamp-1'>
                      {row.original.brand}
                    </Badge>
                  </div>
                )
                : (
                  (
                    <div className='flex flex-col items-center gap-1'>
                      <span className='font-bold text-[8px] uppercase'>Marca</span>
                      <Badge variant='outline' className='line-clamp-1'>
                        N/A
                      </Badge>
                    </div>
                  )
                )
            }
          </div>
        )
      },
      {
        accessorKey: 'price',
        header: 'Precio',
        cell: info => (
          <div className='flex justify-between items-center gap-2'>
            <div className='flex flex-col'>
              <span className='text-[10px] text-slate-400 uppercase'>Venta</span>
              <span className={`font-bold text-end text-lg ${currency === 'bs' ? 'text-primary hover:text-primary/60' : 'text-success hover:text-success/60'}`}>
                {formatPrice(info.getValue(), currency, dollar)}
              </span>
            </div>
            <span className='text-slate-300'>
              |
            </span>
            <div className='flex flex-col items-center'>
              <span className='text-[10px] text-slate-400 uppercase'>Entrada</span>
              <span className='font-bold text-lg text-slate-400 hover:text-slate-400/60 transition-all'>{formatPrice(info.row.original.price_ent, currency, dollar)}</span>
            </div>
          </div>
        )
      }
    ],
    [currency, products]
  )

  const [filtersTable, setFiltersTable] = useState({
    columnVisibility: {
      acciones1: true,
      id: true,
      cedula: true,
      documento: true,
      rif: true,
      nombre: true,
      'nivel profesional': true,
      'fecha nacimiento': true,
      direccion: true,
      email: true,
      telefonos: true,
      sexo: true,
      estado_civil: true,
      peso: true,
      altura: true,
      sangre: true,
      foto: true,
      edad: true,
      familiares: true,
      parroquia: true,
      idiomas: true,
      acciones: true
    },
    filters: '',
    sorting: [],
    columnFilters: [],
    view: 20,
    pagination: {
      pageIndex: 0,
      pageSize: 20
    }
  })

  return (
    <div>
      <ProductsFilters filtersTable={filtersTable} setFiltersTable={setFiltersTable} currency={currency} changeCurrency={changeCurrency} />
      {
        products.load
          ? (
            <DataTable data={products.items} columns={columns} filtersTable={filtersTable} />
          )
          : (
            <ProductsSkeleton changeCurrency={changeCurrency} currency={currency} />
          )
      }
    </div>
  )
}

const SlugsComponent = ({ itemsList }) => {
  const items = itemsList
  const maxItemsToShow = 3
  return (
    <>
      {
        items !== null && (
          <div className='flex justify-center gap-2 line-clamp-1 text-[10px] uppercase'>
            {
              items.slice(0, maxItemsToShow).map((item, index) => (
                <div className='border-1 mt-1 line-clamp-1 text-slate-400/80' key={index}>
                  {item}
                </div>
              ))
            }
          </div>
        )
      }
    </>
  )
}
