import * as React from "react"
import { Link } from "react-router-dom"
import logo from "/logo.svg"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useProductStore } from "@/store/productStore"
import { useConfigStore } from "@/store/configStore"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Productos",
      url: "/productos",
      items: [
        {
          title: "Lista de productos",
          url: "/productos",
        },
        {
          title: "Agregar productos",
          url: "/productos/nuevo",
        },
        {
          title: "Sin imágen",
          url: "/productos/sin-imagen",
        },
        {
          title: "Sin stock",
          url: "/productos/sin-stock",
        },

      ],
    },

    {
      title: "Categorías",
      url: "/categorias",
    },
    {
      title: "Proveedores",
      url: "/proveedores",
    },
    {
      title: "Ventas",
      url: "/ventas",
    },
    {
      title: "Lista negra",
      url: "/lista-negra",
    },
    {
      title: "Configuraciones",
      url: "/configuraciones",
    }

  ],
}

export function AppSidebar({
  ...props
}) {
  const { isLoading, getProductsWithIssues } = useProductStore()
  const { currency } = useConfigStore()
  const [sinStockCount, setSinStockCount] = React.useState(0)
  const [sinImagenCount, setSinImagenCount] = React.useState(0)

  React.useEffect(() => {
    if (!isLoading) {
      const issues = getProductsWithIssues()
      setSinStockCount(issues.productsWithoutStock.count)
      setSinImagenCount(issues.productsWithoutImage.count)
    }
  }, [isLoading])

  console.log()
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="md" asChild>
              <div >
                <div
                  className="flex justify-center items-center">
                  <img src={logo} className="w-22 h-auto" alt="Logo" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium text-[17px] text-primary">Pa'que Freddy</span>
                  <span className="ligth:text-slate-500 text-xs">V 3.5.0</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url} className="font-medium">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <Link className="" to={item.url}>
                            <span className="flex items-center gap-1">
                              {item.title}
                              {item.title === "Sin stock" && sinStockCount > 0 && (
                                <span className={`text-[8px] ${currency === 'USD' ? 'bg-usd' : 'bg-primary'} py-[2px] px-[4px] rounded-full text-white font-bold  `}>
                                  {sinStockCount}
                                </span>
                              )}
                              {item.title === "Sin imágen" && sinImagenCount > 0 && (
                                <span className={`text-[8px] ${currency === 'USD' ? 'bg-usd' : 'bg-primary'} py-[2px] px-[4px] rounded-full text-white font-bold  `}>
                                  {sinImagenCount}
                                </span>
                              )}
                            </span>

                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
