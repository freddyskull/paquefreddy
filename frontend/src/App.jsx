import { AppRouter } from "./app/AppRouter"
import { useProductStore } from "./store/productStore"
import { useConfigStore } from "./store/configStore"
import { useCategoriesStore } from "./store/categoriesStore"
import { useSuppliersStore } from "./store/suppliersStore"
import { useEffect } from "react"
import { useRecordsStore } from "./store/recordsStore"

function App() {

  const { fetchProducts } = useProductStore()
  const { fetchConfig } = useConfigStore()
  const { fetchCategories } = useCategoriesStore()
  const { fetchSuppliers } = useSuppliersStore()
  const { fetchRecords } = useRecordsStore()

  useEffect(() => {
    fetchProducts()
    fetchConfig()
    fetchCategories()
    fetchSuppliers()
    fetchRecords()
  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
