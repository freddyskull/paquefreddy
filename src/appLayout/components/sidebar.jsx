import {
  BookOpen,
  BoxIcon,
  DollarSign,
  Home,
  List,
  Settings2,
  Users2
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { NavMain } from './nav-main'
import { NavUser } from './nav-user'
const data = {
  user: {
    name: 'USUARIO',
    email: 'Administrador',
    avatar: '/profile.jpg'
  },
  navMain: [
    {
      title: 'Inicio',
      url: '#',
      icon: Home
    },
    {
      title: 'Productos',
      url: '#',
      icon: BoxIcon,
      isActive: true
    },
    {
      title: 'Categorías',
      url: '#',
      icon: List
    },
    {
      title: 'Proveedores',
      url: '#',
      icon: Users2
    },
    {
      title: 'Lista negra',
      url: '#',
      icon: BookOpen
      // items: [
      //   {
      //     title: "Introduction",
      //     url: "#",
      //   },
      //   {
      //     title: "Get Started",
      //     url: "#",
      //   },
      //   {
      //     title: "Tutorials",
      //     url: "#",
      //   },
      //   {
      //     title: "Changelog",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: 'Ventas',
      url: '#',
      icon: DollarSign
    },
    {
      title: 'Configuración',
      url: '#',
      icon: Settings2
    }
  ]
}

export const SidebarComponent = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <a href='#' className='flex flex-row items-center gap-2'>
              <div>
                <img src='/logo.svg' width={80} />
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-bold text-lg text-primary/80'>PAQUEFREDDY</span>
                <span className='truncate text-xs'>Sistema</span>
              </div>
            </a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
