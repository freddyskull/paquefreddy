import { ProductsPage } from '@/app/products/productsPage'
import { SalesPage } from '@/app/salesRecords/salesPage'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Componentes (algunos pueden no estar creados aún)

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/productos' element={<ProductsPage />} />
        {/* <Route path='/categorias' element={<Categories />} />
        <Route path='/proveedores' element={<Providers />} />
        <Route path='/lista-negra' element={<Blacklist />} /> */}
        <Route path='/ventas' element={<SalesPage />} />
        {/* <Route path='/configuracion' element={<Settings />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRouter
