import { AppRouter } from "./app/AppRouter"
import { useProductStore } from "./store/productStore"
import { useConfigStore } from "./store/configStore"
import { useCategoriesStore } from "./store/categoriesStore"
import { useEffect } from "react"
import { useRecordsStore } from "./store/recordsStore"

function App() {

  const { fetchProducts } = useProductStore()
  const { fetchConfig } = useConfigStore()
  const { fetchCategories } = useCategoriesStore()
  const { fetchRecords, calculateRecordsTotals } = useRecordsStore()

  useEffect(() => {
    fetchProducts()
    fetchConfig()
    fetchCategories()
    fetchRecords()
    calculateRecordsTotals()
  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
