import * as React from "react"
import { Link } from "react-router-dom"
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

// This is sample data.
const data = {
  navMain: [
    {
      title: "Productos",
      url: "/productos",
      items: [
        {
          title: "Nuevo producto",
          url: "/nuevo-producto",
        },
        {
          title: "Nuevo categoría",
          url: "/",
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
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="md" asChild>
              <div >
                <div
                  className="flex justify-center items-center">
                  <img src="logo.svg" className="w-22 h-auto" alt="Logo" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium text-[17px] text-primary">Pa'que Freddy</span>
                  <span className="ligth:text-slate-500 text-xs">v1.0.0</span>
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
                          <Link to={item.url}>{item.title}</Link>
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
