import { ProductsPage } from "./app/products/productsPage"
import { Layout } from "./appLayout/Layout"
import { Card } from "./components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

function App () {
  return (
    <>
      <Layout > 
        <ProductsPage />
      </Layout>
    </>
  )
}

export default App
