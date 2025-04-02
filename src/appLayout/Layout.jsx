/* eslint-disable no-undef */
import React from 'react'
import { Toaster } from '@/components/ui/toaster'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { SidebarComponent } from './components/sidebar'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb'

export const Layout = ({ children, variant = 'card' }) => {
  // const [sidebarState, setsidebarState] = useState(localStorage.getItem('sidebarState'))
  // useEffect(() => {
  //   const localstorate = localStorage.getItem('sidebarState')
  //   if (localstorate === undefined || localstorate === null) {
  //     localStorage.setItem('sidebarState', true)
  //   } else {
  //     setsidebarState(localstorate)
  //   }
  // }, [])
  return (
    <SidebarProvider>
      <SidebarComponent />
      <SidebarInset>
        <header className='flex items-center gap-2 h-16 shrink-0'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            {/* <Separator orientation="vertical" className="bg-slate-400 mr-2 h-4" /> */}
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href='#'>
                    Productos
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className='px-3'>
          {
            variant === 'card'
              ? (
                <Card className='bg-slate-100 m-0 p-0 h-[91vh]'>
                  <ScrollArea className='max-h-[94vh]'>
                    {children}
                  </ScrollArea>
                </Card>
              )
              : (
                { children }
              )
          }
          <Toaster />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
