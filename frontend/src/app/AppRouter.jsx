import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductPage } from './products/productPage'
import { NewProductPage } from './products/newProductPage'
import { EditProductPage } from './products/editProductPage'
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/productos' element={<ProductPage />} />
        <Route path='/productos/nuevo' element={<NewProductPage />} />
        <Route path='/productos/editar/:id' element={<EditProductPage />} />
      </Routes>
    </Router>
  )
}
