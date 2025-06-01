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
  MessageCircleQuestionIcon,
  Search,
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

export const CalculateProducts = ({ open, onOpenChange }) => {
  const {
    products,
    selectedProducts,
    toggleSelectedProduct,
    updateSelectedProductQuantity,
    clearSelectedAllProducts,
  } = useProductStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [description, setDescription] = useState('');

  const inputRef = useRef(null);

  const handleDeleteConfirmation = () => {
    setIsConfirmDialogOpen(false);
    clearSelectedAllProducts();
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
    console.log(selectedProducts);
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

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <div className="text-foreground/80 bg-background hover:bg-primary/20 hover:text-foreground relative cursor-pointer rounded-md border border-slate-200 p-2 px-3 transition-all duration-300 dark:border-slate-700">
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
        <SheetHeader>
          <div className="relative mt-8 -mb-6 flex items-center justify-between">
            <SheetTitle>
              Calcular precios
              {selectedProducts.length > 0 && (
                <span className="ml-2 text-xs text-slate-400">
                  seleccionados: {selectedProducts.length}
                </span>
              )}
            </SheetTitle>
            {selectedProducts.length > 0 && (
              <div className="absolute -top-2 right-2">
                <Button
                  variant="outline"
                  className="bg-white text-slate-400"
                  size="icon"
                  onClick={() => {
                    setIsConfirmDialogOpen(true);
                    setDescription(
                      'todos los productos dentro de la calculadora serán eliminados.'
                    );
                  }}
                >
                  <BrushCleaning size={12} />
                </Button>
              </div>
            )}
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
          <div className="relative">
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
          <div className="mt-2 flex max-h-[calc(100vh-20rem)] flex-col gap-2 overflow-auto">
            {products.length > 0 &&
              searchTerm.length > 2 &&
              products
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .includes(
                      searchTerm
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                    )
                )
                .map((product) => (
                  <div className="rounded-md bg-white dark:bg-accent/50 dark:text-slate-200" key={product.id}>
                    <ProductsList
                      product={product}
                      selectedProducts={selectedProducts}
                      toggleSelectedProduct={toggleSelectedProduct}
                    />
                  </div>
                ))}
          </div>
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
          <ConfirmationDialog
            isOpen={isConfirmDialogOpen}
            onClose={handleDeleteConfirmation}
            title="¿Estás seguro?"
            description={description}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
