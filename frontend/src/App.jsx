import { AppRouter } from "./app/AppRouter"
import Layout from "./app/layout"
import { useProductStore } from "./store/productStore"
import { useConfigStore } from "./store/configStore"
import { useCategoriesStore } from "./store/categoriesStore"
import { useEffect } from "react"

function App() {

  const { fetchProducts } = useProductStore()
  const { fetchConfig } = useConfigStore()
  const { fetchCategories } = useCategoriesStore()

  useEffect(() => {
    fetchProducts()
    fetchConfig()
    fetchCategories()
  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
