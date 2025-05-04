import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductPage } from './products/productPage'
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/productos' element={<ProductPage />} />
      </Routes>
    </Router>
  )
}
