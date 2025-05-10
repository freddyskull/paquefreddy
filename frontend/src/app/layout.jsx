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
import {  useLocation, Link } from "react-router-dom"


export default function Layout({ children }) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbItems = () => {
    const items = [];
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      items.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        url: currentPath
      });
    });
    
    return items;
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="">
        <header className="flex items-center justify-between gap-2 border-b h-16 shrink-0 bg-sidebar">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <nav className="flex items-center justify-center mt-1 gap-2">
              <Breadcrumb>
                <BreadcrumbList>
                  {getBreadcrumbItems().map((item, index) => (
                    <div className="flex items-center gap-2" key={index}>
                      <BreadcrumbItem>
                        <Link to={item.url} className="transition-colors hover:text-primary/80 uppercase">
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
