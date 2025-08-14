import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useProductStore } from '@/store/productStore';
import {
  BrushCleaning,
  Calculator,
  CalculatorIcon,
  List,
  MessageCircleQuestionIcon,
  Search,
  ShoppingBasket,
  X,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ProductsList } from './productsList';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConfirmationDialog } from '@/components/dialogs/ConfirmationDialog';
import { SelectedProduct } from './selectedProduct';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TotalCalculate } from './totalCalculate';
import { buttonVariants } from '@/components/ui/button';
import { useRecordsStore } from '@/store/recordsStore';
import { BlackListAssignament } from '@/components/dialogs/blackListAssignament';
import { BlackListSelect } from './blackListSelect';

export const CalculateProducts = ({ open, onOpenChange }) => {
  const {
    products,
    selectedProducts,
    toggleSelectedProduct,
    updateSelectedProductQuantity,
    clearSelectedAllProducts,
    calculateTotal,
  } = useProductStore();

  const { createRecord } = useRecordsStore();

  const [searchTerm, setSearchTerm] = useState('');
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [titleConfirmation, setTitleConfirmation] = useState(
    'Confirmar eliminación'
  );
  const [actionConfirm, setActionConfirm] = useState('');
  const [blackListData, setBlackListData] = useState(null);

  const inputRef = useRef(null);

  const handleDeleteConfirmation = (e) => {
    setIsConfirmDialogOpen(false);
    if (e) {
      clearSelectedAllProducts();
    }
  };

  const handleRecordConfirmation = async (e) => {
    setIsConfirmDialogOpen(false);
    if (e) {
      const record = {
        productList: [...selectedProducts],
        totals: calculateTotal,
        blacklist_id: blackListData?.id || null,
        status: blackListData ? true : false
      };
      const resp = await createRecord(record);
      if (resp === 'success') {
        clearSelectedAllProducts();
      }
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.key === 'Backspace') {
        setSearchTerm('');
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'Backspace') {
        setIsConfirmDialogOpen(true);
        setDescription(
          'todos los productos dentro de la calculadora serán eliminados.'
        );
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [clearSelectedAllProducts]);

  useEffect(() => {
    // console.log(selectedProducts);
  }, [selectedProducts]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.altKey && event.key === 'Enter') {
        inputRef.current.focus();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  // Función para filtrar productos por searchTerm (name, slugs, brand)
  function filterProductsBySearchTerm(products, searchTerm) {
    if (!products || searchTerm.length <= 2) return [];
    const normalizedSearch = searchTerm
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return products.filter((product) => {
      // Buscar en name
      const nameMatch = product.name
        ?.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(normalizedSearch);
      // Buscar en slugs (arreglo de strings)
      const slugsMatch = Array.isArray(product.slugs)
        ? product.slugs.some((slug) =>
            slug
              ?.toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .includes(normalizedSearch)
          )
        : false;
      // Buscar en brand
      const brandMatch = product.brand
        ?.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(normalizedSearch);
      return nameMatch || slugsMatch || brandMatch;
    });
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <div className="bg-background hover:bg-primary/20 text-foreground/80 hover:text-foreground relative cursor-pointer rounded-md border border-slate-200 p-2 px-3 transition-all duration-300 dark:border-slate-700">
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
          <div className="relative mt-8 -mb-6 flex items-center justify-between">
            <SheetTitle className="ml-3">
              Calcular precios
              {selectedProducts.length > 0 && (
                <span className="ml-2 text-xs text-slate-400">
                  seleccionados: {selectedProducts.length}
                </span>
              )}
            </SheetTitle>

            <div className="absolute -top-2 right-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className={buttonVariants({
                        variant: 'outline',
                        size: 'icon',
                        className: `dark:bg-primary/20 hover:bg-primary/30 dark:shadow-primary/40! hover:shadow-primary/80! text-primary hover:text-primary hover:border-primary bg-white shadow-xl! transition-shadow duration-200 ${selectedProducts.length === 0 ? 'pointer-events-none cursor-not-allowed bg-slate-300! text-slate-500 opacity-50' : ''}`,
                      })}
                      onClick={() => {
                        if (selectedProducts.length === 0) return;
                        setTitleConfirmation(
                          `Realizar venta ${(blackListData?.name && 'pendiente a ' + blackListData?.name) || ''}`
                        );
                        setDescription(
                          'Se creará una venta con los productos seleccionados' +
                            ((blackListData?.name &&
                              ' asignados a ' + blackListData?.name) ||
                              '') +
                            ' y se eliminarán de la calculadora.'
                        );
                        setActionConfirm('sell');
                        setIsConfirmDialogOpen(true);
                      }}
                      size="icon"
                      aria-disabled={selectedProducts.length === 0}
                      tabIndex={selectedProducts.length === 0 ? -1 : 0}
                    >
                      <ShoppingBasket size={12} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-center font-bold uppercase">
                      {selectedProducts.length > 0 ? (
                        `Crear venta (${selectedProducts.length})`
                      ) : (
                        <span className="text-slate-200">
                          No hay productos seleccionados
                        </span>
                      )}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="absolute top-[18px] left-4">
                  <MessageCircleQuestionIcon size={18} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-center font-bold uppercase">
                  Atajos del teclado
                </p>
                <ul className="mt-2 list-disc">
                  <li className="flex items-center justify-between gap-2">
                    <b>* Alt + Enter</b> <span>Enfocar campo de busqueda</span>
                  </li>
                  <li className="flex items-center justify-between gap-2">
                    <b>* Ctrl + Backspace</b> <span>Limpiar busqueda</span>
                  </li>
                  <li className="flex items-center justify-between gap-2">
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
            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <Input
                  placeholder="Buscar producto"
                  className="pl-8"
                  ref={inputRef}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute top-[10px] left-3 h-[35px] p-0! text-slate-400">
                  <Search size={15} />
                </div>
                {searchTerm.length > 2 && (
                  <Button
                    variant="ghost"
                    className="absolute top-[3px] right-[5px] h-[30px] w-[30px] rounded-full p-0! text-slate-400"
                    size="icon"
                    onClick={() => setSearchTerm('')}
                  >
                    <X />
                  </Button>
                )}
              </div>

              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className={buttonVariants({
                        variant: 'outline',
                        size: 'icon',
                        className: `text-slate-500! ${
                          selectedProducts.length === 0 && 'opacity-50 cursor-not-allowed bg-white/80!'
                        }`
                      })}
                      onClick={(e) => {
                        if (selectedProducts.length === 0) {
                          e.preventDefault()
                        }else{
                          setTitleConfirmation('Eliminar productos')
                          setDescription(
                            'todos los productos dentro de la calculadora serán eliminados.'
                          )
                          setActionConfirm('delete')
                          setIsConfirmDialogOpen(true)
                        }
                      }}
                    >
                      <BrushCleaning size={12} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                  <p className="font-bold text-center text-[9px] uppercase max-w-24">
                      Eliminar productos
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
              {/* <Tooltip>
                <TooltipTrigger>
                  <div
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'icon',
                      className: `text-slate-500! ${
                        selectedProducts.length === 0 && 'opacity-50 cursor-not-allowed bg-white/80!'
                      }`
                    })}
                    onClick={(e) => {
                      if (selectedProducts.length === 0) {
                        e.preventDefault()
                      }else{
                        setBlackListAssignamentOpen(true)
                      }
                    }}
                  >
                    <List size={12} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-bold text-center text-[9px] uppercase max-w-24">
                    Asignar esta venta a usuario de la lista negra
                  </p>
                </TooltipContent>
              </Tooltip> */}

              <BlackListSelect
                blackListData={blackListData}
                setBlackListData={setBlackListData}
              />
            </div>
          </div>
          {/* lista del buscador  */}
          <div className="mt-2 flex max-h-[30vh] flex-col gap-2 overflow-auto">
            {products.length > 0 &&
              searchTerm.length > 2 &&
              filterProductsBySearchTerm(products, searchTerm).map(
                (product) => (
                  <div
                    className="dark:bg-accent/50 rounded-md bg-white dark:text-slate-200"
                    key={product.id}
                  >
                    <ProductsList
                      product={product}
                      selectedProducts={selectedProducts}
                      toggleSelectedProduct={toggleSelectedProduct}
                    />
                  </div>
                )
              )}
          </div>
          {/* lista de productos seleccionados */}
          <div className="dark:bg-secondary mt-2 h-[calc(100vh-13rem)] overflow-auto rounded-md bg-white p-4 dark:text-slate-200">
            {selectedProducts.length > 0 ? (
              <div className="flex flex-col gap-4">
                {selectedProducts.map((product) => (
                  <div key={product.id} className="border-b-2 pb-4">
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
              <div className="flex h-full flex-col items-center justify-center text-center text-slate-400 opacity-80">
                <div className="mb-4 flex items-center justify-center rounded-full">
                  <CalculatorIcon size={80} strokeWidth={1} />
                </div>
                <h2 className="text-md font-bold uppercase">
                  No hay productos seleccionados
                </h2>
                <p className="mt-1 text-sm text-slate-400">
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
            onClose={(e) =>
              actionConfirm == 'delete'
                ? handleDeleteConfirmation(e)
                : handleRecordConfirmation(e)
            }
            title={titleConfirmation}
            description={description}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
