import { AppRouter } from "./app/AppRouter"
import Layout from "./app/layout"
import { useProductStore } from "./store/productStore"
import { useConfigStore } from "./store/configStore"
import { useEffect } from "react"

function App() {

  const { fetchProducts } = useProductStore()
  const { fetchConfig } = useConfigStore()

  useEffect(() => {
    fetchProducts()
    fetchConfig()
  }, [])

  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  )
}

export default App
