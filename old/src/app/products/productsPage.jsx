/* eslint-disable no-undef */
import { useEffect, useMemo, useState } from 'react'
import { useProductsStore } from '../../features/store/productsStore'
import { ProductsSkeleton } from './skeleton/ProductsSkeleton'
import { DataTable } from '@/components/dataTable/dataTable'
import { Badge } from '@/components/ui/badge'
import { formatDistanceInDays } from '@/features/dateReturn'
import { formatPrice } from '@/features/formatPrice'
import { Sparkles } from 'lucide-react'
import { ProductsFilters } from './components/filters/productsFilters'
import { useConfigStore } from '@/features/store/configStore'
import { useCategoriesStore } from '@/features/store/categoriesStore'
import { useToast } from '@/hooks/use-toast'
import { EditPriceDialog } from './components/editPriceDialog'
import { Layout } from '@/appLayout/Layout'

export const ProductsPage = () => {
  const { getProducts, products, deleteProduct } = useProductsStore()
  const { getCategories, categories } = useCategoriesStore()
  const { getConfig, config } = useConfigStore()
  const [currency, setcurrency] = useState(localStorage.getItem('currency'))
  const [showPriceEnt, setshowPriceEnt] = useState(JSON.parse(localStorage.getItem('showPriceEnt')))
  const [showEdit, setShowEdit] = useState(JSON.parse(localStorage.getItem('showEdit')))
  useEffect(() => {
    getProducts()
    getConfig()
    getCategories()
    const storedCurrency = localStorage.getItem('currency')
    const priceEnt = localStorage.getItem('showPriceEnt')
    const edit = localStorage.getItem('showEdit')
    if (storedCurrency) {
      setcurrency(storedCurrency)
    } else {
      localStorage.setItem('currency', 'bs')
      setcurrency('bs')
    }
    if (!priceEnt) {
      localStorage.setItem('showPriceEnt', 'true')
    }
    if (!edit) {
      localStorage.setItem('showEdit', 'true')
    }
  }, [])
  const dollar = config.item.dollar

  const [productActionDialog, setProductActionDialog] = useState(false) // este es el que se utiliza para abrir el dialog de agregar o editar productos

  const changeCurrency = (newCurrency) => {
    setcurrency(newCurrency)
    localStorage.setItem('currency', newCurrency)
  }

  const changeShowPriceEnt = (newPriceEnt) => {
    setshowPriceEnt(newPriceEnt)
    localStorage.setItem('showPriceEnt', newPriceEnt)
  }

  const changeShowEdit = (newShowEdit) => {
    setShowEdit(newShowEdit)
    localStorage.setItem('showEdit', newShowEdit)
  }

  const initialState = {
    name: '',
    stock: 0,
    categorie_clt: 'kmffiyauecs65cp', // TODO: Esto debo resolverlo ya que estoy tomando la categoria directamente
    price: 0,
    price_ent: 0,
    slugs: [],
    image: '',
    brand: '',
    bundle: 0,
    price_bundle: 0,
    expiration: null
  }
  const { toast } = useToast()
  const [data, setdata] = useState(initialState)

  const columns = useMemo(
    () => [
      {
        id: 'Imágen',
        accessorKey: 'image',
        header: 'Imágen',
        classname: 'text-center',
        enableFiltering: false,
        enableGlobalFilter: false,
        cell: info => (
          <div
            className='z-0 mt-2 image'
            style={{ backgroundImage: `url(${info.getValue()})` }}
          />
        )
      },
      {
        id: 'Fecha de creación',
        accessorKey: 'created',
        header: 'Fecha de creacion',
        enableGlobalFilter: false,
        cell: info => (
          <>
            {formatDistanceInDays(new Date(), info.getValue()) === 'nuevo'
              ? (
                <Badge className={`flex gap-1 items-center badge-date px-2 h-[25px] ${currency === 'usd' && 'bg-success hover:bg-success/80'}`}>
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
        id: 'Edición',
        accessorKey: 'updated',
        header: 'Editado recientemente',
        enableGlobalFilter: false,
        cell: ({ row }) => (
          <>
            {formatDistanceInDays(new Date(), row.original.updated) === 'nuevo' && formatDistanceInDays(new Date(), row.original.created) !== 'nuevo' &&
              (
                <div className={`bg-amber-500 pulse badge-edit !text-white ${!showEdit && 'hidden'}`} />
              )}
          </>
        )
      },
      {
        id: 'Nombre',
        accessorKey: 'name',
        header: 'Nombre del Producto',
        cell: info => (
          <h1 className={
            `md:line-clamp-2 text-sm md:text-lg w-full flex items-center text-center h-14 justify-center
            ${currency === 'bs' ? 'hover:text-primary' : 'hover:text-success'} title`
          }
          >
            <span>{info.getValue()}</span>
          </h1>
        )
      },
      {
        id: 'Etiquetas',
        accessorKey: 'slugs',
        header: 'Etiquetas',
        cell: info => (
          <SlugsComponent itemsList={info.getValue()} />
        )
      },
      {
        id: 'Atributos',
        accessorKey: '@expand',
        header: 'Atributos',
        enableGlobalFilter: false,
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
        id: 'Precio',
        accessorKey: 'price',
        header: 'Precio',
        cell: info => <PriceComponent showPriceEnt={showPriceEnt} info={info} currency={currency} dollar={dollar} changeCurrency={changeCurrency} />
      },
      {
        header: 'slugs',
        id: 'slugs',
        accessorFn: (row) => `${row.slugs}`
      },
      {
        header: 'brand',
        id: 'brand',
        accessorFn: (row) => `${row.brand}`
      },
      {
        header: 'categorie_clt',
        id: 'categorie_clt',
        enableGlobalFilter: false,
        accessorFn: (row) => `${row.categorie_clt}`
      }
    ],
    [currency, products, showPriceEnt, showEdit, data]
  )

  const [filtersTable, setFiltersTable] = useState({
    columnVisibility: {
      Imágen: true,
      'Fecha de creación': true,
      Edición: true,
      Nombre: true,
      Etiquetas: true,
      Atributos: true,
      Precio: true,
      slugs: false,
      brand: false,
      categorie_clt: false
    },
    filters: '',
    sorting: [
      {
        id: 'Fecha de creación',
        desc: true
      }
    ],
    columnFilters: [],
    view: 20,
    pagination: {
      pageIndex: 0,
      pageSize: 60
    }
  })

  const editProductHandle = (dataForm) => {
    setdata({ ...dataForm })
    setProductActionDialog(true)
  }
  const deleteProductHandle = (dataForm) => {
    deleteProduct(dataForm.id)
    toast({
      title: `El producto "${dataForm.name}" ha sido eliminado`
    })
  }

  return (
    <Layout>
      <div>
        {
          categories.load && (
            <ProductsFilters
              filtersTable={filtersTable}
              setFiltersTable={setFiltersTable}
              currency={currency}
              changeCurrency={changeCurrency}
              changeShowPriceEnt={changeShowPriceEnt}
              showPriceEnt={showPriceEnt}
              data={data}
              initialState={initialState}
              setdata={setdata}
              showEdit={showEdit}
              changeShowEdit={changeShowEdit}
              productActionDialog={productActionDialog}
              setProductActionDialog={setProductActionDialog}
            />
          )
        }
        {
          products.load
            ? (
              <DataTable
                data={products.items}
                columns={columns}
                filtersTable={filtersTable}
                editItem={editProductHandle}
                deleteItem={deleteProductHandle}
              />
            )
            : (
              <ProductsSkeleton
                changeCurrency={changeCurrency}
                currency={currency}
              />
            )
        }
      </div>
    </Layout>
  )
}

export const SlugsComponent = ({ itemsList }) => {
  const items = itemsList
  const maxItemsToShow = 3
  return (
    <>
      {
        items !== null && items !== undefined && (
          <div className='flex justify-center gap-2 text-[10px] uppercase line-clamp-1'>
            {
              items.length > 0
                ? items.slice(0, maxItemsToShow).map((item, index) => (
                  <div className='mt-1 border-1 text-slate-400/80 line-clamp-1' key={index}>
                    {item}
                  </div>
                ))
                : (
                  <div className='mt-1 border-1 text-slate-400/80 line-clamp-1'>SIn Etiquetas </div>
                )
            }
          </div>
        )
      }
    </>
  )
}

const PriceComponent = ({ showPriceEnt, info, currency, dollar, changeCurrency }) => {
  const [editPriceState, setEditPriceState] = useState(false)
  return (
    <>
      {showPriceEnt
        ? (
          <div className='flex justify-between items-center gap-2'>
            <div className='flex flex-col'>
              <span className='text-[10px] text-slate-400 uppercase'>Venta</span>
              <span onClick={() => setEditPriceState(true)} className={`font-bold text-end text-lg ${currency === 'bs' ? 'text-primary hover:text-primary/60' : 'text-success hover:text-success/60'}`}>
                {formatPrice(info.getValue(), currency, dollar)}
              </span>
              {
                editPriceState && (
                  <EditPriceDialog
                    editPriceState={editPriceState}
                    setEditPriceState={setEditPriceState}
                    data={info.row.original}
                    currency={currency}
                    dollar={dollar}
                    changeCurrency={changeCurrency}
                  />
                )
              }
            </div>
            <span className='text-slate-300'>
              |
            </span>
            <div className='flex flex-col items-center'>
              <span className='text-[10px] text-slate-400 uppercase'>Entrada</span>
              <span className='font-bold text-slate-400 hover:text-slate-400/60 text-lg transition-all'>{formatPrice(info.row.original.price_ent, currency, dollar)}</span>
            </div>
          </div>
        )
        : (
          <div className='flex justify-center'>
            <div className='flex flex-col text-center'>
              <span className='text-[10px] text-slate-400 uppercase'>PRECIO</span>
              <span onClick={() => setEditPriceState(true)} className={`font-bold text-end text-2xl cursor-pointer ${currency === 'bs' ? 'text-primary hover:text-primary/60' : 'text-success hover:text-success/60'}`}>
                {formatPrice(info.getValue(), currency, dollar)}
              </span>
            </div>
            {
              editPriceState && (
                <EditPriceDialog
                  editPriceState={editPriceState}
                  setEditPriceState={setEditPriceState}
                  data={info.row.original}
                  currency={currency}
                  dollar={dollar}
                  changeCurrency={changeCurrency}
                />
              )
            }
          </div>
        )}
    </>
  )
}
