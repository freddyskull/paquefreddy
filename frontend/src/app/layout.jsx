import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { CurrencySelector } from "./currencySelector"
import { Toaster } from "@/components/ui/sonner"
import { useLocation, Link } from "react-router-dom"
import { useProductStore } from "@/store/productStore"
import { useConfigStore } from "@/store/configStore"
import { useEffect, useState, useMemo } from "react"
import axios from "axios"
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tooltip } from "@radix-ui/react-tooltip"
import { DolarPriceDialog } from "./components/dolarPriceDilaog"


export default function Layout({ children }) {
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter(Boolean)
  const { selectedProducts: selectedProductsRaw, calculateTotal: calculateTotalRaw } = useProductStore()
  const selectedProducts = useMemo(() => selectedProductsRaw, [selectedProductsRaw])
  const calculateTotal = useMemo(() => calculateTotalRaw, [calculateTotalRaw])
  const { config } = useConfigStore()
  const dolar = config?.dolar || 0

  const getBreadcrumbItems = () => {
    const items = []
    let currentPath = ''

    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`
      items.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        url: currentPath
      })
    })

    return items
  }
  const [externalDolarRaw, setExternalDolar] = useState({})
  const [openDialogDolar, setOpenDialogDolar] = useState(false)
  const externalDolar = useMemo(() => externalDolarRaw, [externalDolarRaw])
  useEffect(() => {
    const fetchDolar = () => {
      axios.get("https://ve.dolarapi.com/v1/dolares")
        .then(response => {
          setExternalDolar(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    }
    fetchDolar()
    const interval = setInterval(fetchDolar, 2 * 60 * 60 * 1000) // 2 horas
    return () => clearInterval(interval)
  }, [])





  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
        <header className="flex justify-between items-center gap-2 bg-sidebar border-b h-16 shrink-0">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <nav className="flex justify-center items-center gap-2 mt-1">
              <Breadcrumb>
                <BreadcrumbList>
                  {getBreadcrumbItems().map((item, index) => (
                    <div className="flex items-center gap-2" key={index}>
                      <BreadcrumbItem>
                        <Link to={item.url} className="hover:text-primary/80 uppercase transition-colors">
                          {item.label}
                        </Link>
                      </BreadcrumbItem>
                      {index < getBreadcrumbItems().length - 1 && (
                        <BreadcrumbSeparator className="hidden md:block" />
                      )}
                    </div>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </nav>
          </div>
          <div className="flex items-center gap-2 px-3">
            {
              selectedProducts.length > 0 && (
                <div className="flex items-center gap-2">
                  <p>Tienes <span className="">{selectedProducts.length}</span> en la calculadora</p>
                  {
                    calculateTotal.totalDolar > 0 && (
                      <div className="flex items-center gap-2">
                        <p className="text-slate-500 dark:text-white/80 text-sm">
                          <span className="font-bold">Bs {calculateTotal.totalBs.toFixed(2)}</span>
                        </p>
                        <span className="text-xs"> | </span>
                        <p className="text-slate-500 dark:text-white/80 text-sm">
                          <span className="font-bold">${calculateTotal.totalDolar.toFixed(2)}</span>
                        </p>
                      </div>
                    )
                  }
                </div>
              )
            }
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center gap-2 font-bold text-slate-500 dark:text-white/80 text-sm">
              <span className="text-xs">Precios dolares: </span>
              <DolarPriceDialog open={openDialogDolar} onOpenChange={setOpenDialogDolar} priceDolar={dolar} >
                <span className={`hover:underline cursor-pointer ${dolar <= externalDolar[0]?.promedio ? "text-red-500" : "text-primary"}`}>Bs. {dolar.toFixed(2)}</span>
              </DolarPriceDialog>
              <span className="text-[5px]"> | </span>
              <a href="https://www.bcv.org.ve/" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-1 text-xs hover:underline" >
                  {/* BCV image: light/dark */}
                  <img
                    src="/bcv.png"
                    alt="bcv-inverse"
                    width={30}
                    className="dark:hidden block"
                  />
                  <img
                    src="/bcv-inverse.png"
                    alt="bcv"
                    width={30}
                    className="hidden dark:block"
                  />
                  {externalDolar[0]?.promedio.toFixed(2) || "00.00"}
                </span>
              </a>
              <span className="text-[5px]"> | </span>
              <a href="https://www.instagram.com/monitordollarvzlar/" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-1 text-xs hover:underline">
                  {/* DolarToday image: light/dark */}
                  <img
                    src="/dolartoday.png"
                    alt="dolartoday"
                    width={30}
                    className="dark:hidden block"
                  />
                  <img
                    src="/dolartoday-inverse.png"
                    alt="dolartoday-inverse"
                    width={30}
                    className="hidden dark:block"
                  />
                  {externalDolar[1]?.promedio.toFixed(2) || "00.00"}
                </span>
              </a>
            </div>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <CurrencySelector />
          </div>
        </header>
        <div className="p-4">
          {children}
        </div>
      </SidebarInset>
      <Toaster />

    </SidebarProvider>
  )
}
