import { AppRouter } from "./app/AppRouter"
import { useProductStore } from "./store/productStore"
import { useConfigStore } from "./store/configStore"
import { useCategoriesStore } from "./store/categoriesStore"
import { useSuppliersStore } from "./store/suppliersStore"
import { useEffect } from "react"

function App() {

  const { fetchProducts } = useProductStore()
  const { fetchConfig } = useConfigStore()
  const { fetchCategories } = useCategoriesStore()
  const { fetchSuppliers } = useSuppliersStore()


  useEffect(() => {
    fetchProducts()
    fetchConfig()
    fetchCategories()
    fetchSuppliers()
  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
