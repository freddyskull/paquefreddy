import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList
} from '@/components/ui/breadcrumb'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { SidebarComponent } from './components/sidebar'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@radix-ui/react-scroll-area'

export const Layout = ({ children, variant = 'card' }) => {
  return (
    <SidebarProvider>
      <SidebarComponent />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            {/* <Separator orientation="vertical" className="mr-2 h-4 bg-slate-400" /> */}
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
              <Card className='max-h-[91vh] p-2'>
                <ScrollArea className='max-h-[91vh] p-4'>
                  {children}
                </ScrollArea>
              </Card>
              )
            : (
                { children }
              )
          }
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
