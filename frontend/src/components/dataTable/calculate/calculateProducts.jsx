import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useProductStore } from '@/store/productStore'
import {
  BrushCleaning,
  Calculator,
  CalculatorIcon,
  MessageCircleQuestionIcon,
  Search,
  ShoppingBasket,
  X,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ProductsList } from './productsList'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ConfirmationDialog } from '@/components/dialogs/ConfirmationDialog'
import { SelectedProduct } from './selectedProduct'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { TotalCalculate } from './totalCalculate'
import { buttonVariants } from "@/components/ui/button"
import { useRecordsStore } from '@/store/recordsStore'


export const CalculateProducts = ({ open, onOpenChange }) => {
  const {
    products,
    selectedProducts,
    toggleSelectedProduct,
    updateSelectedProductQuantity,
    clearSelectedAllProducts,
    calculateTotal
  } = useProductStore()

  const { createRecord } = useRecordsStore()


  const [searchTerm, setSearchTerm] = useState('')
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [description, setDescription] = useState('')
  const [titleConfirmation, setTitleConfirmation] = useState('Confirmar eliminación')
  const [actionConfirm, setActionConfirm] = useState('')

  const inputRef = useRef(null)

  const handleDeleteConfirmation = (e) => {
    setIsConfirmDialogOpen(false)
    if (e) {
      clearSelectedAllProducts()
    }
  }

  const handleRecordConfirmation = async (e) => {
    setIsConfirmDialogOpen(false)
    if (e) {
      const record = {
        "productList": [...selectedProducts],
        "totals": calculateTotal
      }
      const resp = await createRecord(record)
      if (resp === 'success') {
        clearSelectedAllProducts()
      }
    }
  }

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.key === 'Backspace') {
        setSearchTerm('')
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'Backspace') {
        setIsConfirmDialogOpen(true)
        setDescription(
          'todos los productos dentro de la calculadora serán eliminados.'
        )
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [clearSelectedAllProducts])

  useEffect(() => {
    // console.log(selectedProducts);
  }, [selectedProducts])

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.altKey && event.key === 'Enter') {
        inputRef.current.focus()
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  // Función para filtrar productos por searchTerm (name, slugs, brand)
  function filterProductsBySearchTerm(products, searchTerm) {
    if (!products || searchTerm.length <= 2) return []
    const normalizedSearch = searchTerm
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    return products.filter((product) => {
      // Buscar en name
      const nameMatch = product.name
        ?.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(normalizedSearch)
      // Buscar en slugs (arreglo de strings)
      const slugsMatch = Array.isArray(product.slugs)
        ? product.slugs.some(slug =>
          slug
            ?.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(normalizedSearch)
        )
        : false
      // Buscar en brand
      const brandMatch = product.brand
        ?.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(normalizedSearch)
      return nameMatch || slugsMatch || brandMatch
    })
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <div className="relative bg-background hover:bg-primary/20 p-2 px-3 border border-slate-200 dark:border-slate-700 rounded-md text-foreground/80 hover:text-foreground transition-all duration-300 cursor-pointer">
          <Calculator size={18} />
          <div
            className={
              selectedProducts.length > 0
                ? 'bg-primary fade-in absolute -top-2 -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white transition-all duration-300'
                : 'absolute -top-2 -right-2 opacity-0'
            }
          >
            {selectedProducts.length}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="px-0!">
          <div className="relative flex justify-between items-center mt-8 -mb-6">
            <SheetTitle className="ml-3">
              Calcular precios
              {selectedProducts.length > 0 && (
                <span className="ml-2 text-slate-400 text-xs">
                  seleccionados: {selectedProducts.length}
                </span>
              )}
            </SheetTitle>

            <div className="-top-2 right-2 absolute">
              <TooltipProvider >
                <Tooltip >
                  <TooltipTrigger>
                    <div
                      className={buttonVariants({
                        variant: 'outline',
                        size: 'icon',
                        className: `bg-white dark:bg-primary/20 hover:bg-primary/30 dark:shadow-primary/40! shadow-xl! hover:shadow-primary/80! text-primary hover:text-primary transition-shadow hover:border-primary duration-200 ${selectedProducts.length === 0 ? ' bg-slate-300! opacity-50 text-slate-500 pointer-events-none cursor-not-allowed' : ''}`,
                      })}
                      onClick={() => {
                        if (selectedProducts.length === 0) return
                        setTitleConfirmation('Realizar venta')
                        setDescription(
                          'Se creará una venta con los productos seleccionados, y se eliminarán de la calculadora.'
                        )
                        setActionConfirm('sell')
                        setIsConfirmDialogOpen(true)
                      }}
                      size="icon"
                      aria-disabled={selectedProducts.length === 0}
                      tabIndex={selectedProducts.length === 0 ? -1 : 0}
                    >
                      <ShoppingBasket size={12} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent >
                    <p className="font-bold text-center uppercase">
                      {
                        selectedProducts.length > 0
                          ? `Crear venta (${selectedProducts.length})`
                          : (<span className="text-slate-200">No hay productos seleccionados</span>)
                      }
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="top-[18px] left-4 absolute">
                  <MessageCircleQuestionIcon size={18} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold text-center uppercase">
                  Atajos del teclado
                </p>
                <ul className="mt-2 list-disc">
                  <li className="flex justify-between items-center gap-2">
                    <b>* Alt + Enter</b> <span>Enfocar campo de busqueda</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <b>* Ctrl + Backspace</b> <span>Limpiar busqueda</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <b>* Ctrl + Shift + Backspace</b>{' '}
                    <span>Limpiar todos los productos</span>
                  </li>
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </SheetHeader>
        <div className="px-2">
          {/* input buscador */}
          <div className="relative">
            <div className='flex items-center gap-2'>
              <div className="relative w-full">
                <Input
                  placeholder="Buscar producto"
                  className="pl-8"
                  ref={inputRef}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="top-[10px] left-3 absolute p-0! h-[35px] text-slate-400">
                  <Search size={15} />
                </div>
                {searchTerm.length > 2 && (
                  <Button
                    variant="ghost"
                    className="top-[3px] right-[5px] absolute p-0! rounded-full w-[30px] h-[30px] text-slate-400"
                    size="icon"
                    onClick={() => setSearchTerm('')}
                  >
                    <X />
                  </Button>
                )}
              </div>

              <Button
                variant="outline"
                className="bg-white text-slate-500"
                size="icon"
                disabled={selectedProducts.length === 0}
                onClick={() => {
                  setTitleConfirmation('Eliminar productos')
                  setDescription(
                    'todos los productos dentro de la calculadora serán eliminados.'
                  )
                  setActionConfirm('delete')
                  setIsConfirmDialogOpen(true)
                }}
              >
                <BrushCleaning size={12} />
              </Button>
            </div>
          </div>
          {/* lista del buscador  */}
          <div className="flex flex-col gap-2 mt-2 max-h-[30vh] overflow-auto">
            {products.length > 0 &&
              searchTerm.length > 2 &&
              filterProductsBySearchTerm(products, searchTerm)
                .map((product) => (
                  <div className="bg-white dark:bg-accent/50 rounded-md dark:text-slate-200" key={product.id}>
                    <ProductsList
                      product={product}
                      selectedProducts={selectedProducts}
                      toggleSelectedProduct={toggleSelectedProduct}
                    />
                  </div>
                ))}
          </div>
          {/* lista de productos seleccionados */}
          <div className="bg-white dark:bg-secondary mt-2 p-4 rounded-md h-[calc(100vh-13rem)] overflow-auto dark:text-slate-200">
            {selectedProducts.length > 0 ? (
              <div className="flex flex-col gap-4">
                {selectedProducts.map((product) => (
                  <div key={product.id} className="pb-4 border-b-2">
                    <SelectedProduct
                      product={product}
                      updateSelectedProductQuantity={
                        updateSelectedProductQuantity
                      }
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center opacity-80 h-full text-slate-400 text-center">
                <div className="flex justify-center items-center mb-4 rounded-full">
                  <CalculatorIcon size={80} strokeWidth={1} />
                </div>
                <h2 className="font-bold text-md uppercase">
                  No hay productos seleccionados
                </h2>
                <p className="mt-1 text-slate-400 text-sm">
                  Seleccione al menos un producto para continuar
                </p>
              </div>
            )}
          </div>
          {/* Calculo de totales */}
          <TotalCalculate selectedProducts={selectedProducts} />
          {/* Dialogo de confirmacion */}
          <ConfirmationDialog
            isOpen={isConfirmDialogOpen}
            onClose={(e) => actionConfirm == 'delete' ? handleDeleteConfirmation(e) : handleRecordConfirmation(e)}
            title={titleConfirmation}
            description={description}
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}
