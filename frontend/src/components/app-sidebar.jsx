import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.svg';
import {
  Home,
  Package,
  Tag,
  Factory,
  ShoppingCart,
  Ban,
  Settings,
  List,
  Plus,
  ImageOff,
  AlertTriangle,
} from 'lucide-react';
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
} from '@/components/ui/sidebar';
import { useProductStore } from '@/store/productStore';
import { useConfigStore } from '@/store/configStore';

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Home',
      url: '/home',
      icon: Home,
    },
    {
      title: 'Productos',
      url: '/productos',
      icon: Package,
      items: [
        {
          title: 'Lista de productos',
          url: '/productos',
        },
        {
          title: 'Agregar productos',
          url: '/productos/nuevo',
        },
        {
          title: 'Sin imágen',
          url: '/productos/sin-imagen',
        },
        {
          title: 'Sin stock',
          url: '/productos/sin-stock',
        },
      ],
    },

    {
      title: 'Categorías',
      url: '/categorias',
      icon: Tag,
    },
    {
      title: 'Proveedores',
      url: '/proveedores',
      icon: Factory,
    },
    {
      title: 'Ventas',
      url: '/ventas',
      icon: ShoppingCart,
    },
    {
      title: 'Lista negra',
      url: '/lista-negra',
      icon: List,
    },
    {
      title: 'Configuraciones',
      url: '/configuraciones',
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { isLoading, getProductsWithIssues } = useProductStore();
  const { currency } = useConfigStore();
  const [sinStockCount, setSinStockCount] = React.useState(0);
  const [sinImagenCount, setSinImagenCount] = React.useState(0);
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (!isLoading) {
      const issues = getProductsWithIssues();
      setSinStockCount(issues.productsWithoutStock.count);
      setSinImagenCount(issues.productsWithoutImage.count);
    }
  }, [isLoading, getProductsWithIssues]);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className='flex items-center gap-2 my-2'>
              <div className="flex items-center justify-center">
                <img src={logo} className="h-auto w-22" alt="Logo" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span
                  className={`text-[17px] font-bold ${currency === 'USD' ? 'text-usd' : 'text-primary'}`}
                >
                  Pa'que Freddy
                </span>
                <span className="ligth:text-slate-500 text-xs">V 3.5.0</span>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={
                    pathname === item.url || pathname.startsWith(item.url + '/')
                  }
                >
                  <Link
                    to={item.url}
                    className={`font-medium ${
                      pathname === item.url ||
                      pathname.startsWith(item.url + '/')
                        ? `active ${currency === 'USD' ? 'bg-usd!' : 'bg-primary!'}`
                        : ''
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon ? (
                        <item.icon className="h-4 w-4" aria-hidden="true" />
                      ) : null}
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="mt-2">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === item.url}
                        >
                          <Link
                            className={`${pathname === item.url ? `active ${currency === 'USD' ? 'bg-usd!' : 'bg-primary!'}` : ''}`}
                            to={item.url}
                          >
                            <span className="flex items-center gap-2">
                              {item.icon ? (
                                <item.icon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              ) : null}
                              {item.title}
                              {item.title === 'Sin stock' &&
                                sinStockCount > 0 && (
                                  <span
                                    className={`text-[8px] ${currency === 'USD' ? 'bg-usd!' : 'bg-primary!'} rounded-full px-[4px] py-[2px] font-bold text-white`}
                                  >
                                    {sinStockCount}
                                  </span>
                                )}
                              {item.title === 'Sin imágen' &&
                                sinImagenCount > 0 && (
                                  <span
                                    className={`text-[8px] ${currency === 'USD' ? 'bg-usd!' : 'bg-primary!'} rounded-full px-[4px] py-[2px] font-bold text-white`}
                                  >
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
  );
}
