import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ProductPage } from './products/productPage'
import { NewProductPage } from './products/newProductPage'
import { EditProductPage } from './products/editProductPage'
import { ErrorConexion } from '../error-conexion'
import { Home } from './home/home'
import { RecordPage } from './records/recordPage'
import { NoRouteUrl } from './no-exist/noRouteUrl'
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<NoRouteUrl />} />
        <Route path='/productos' element={<ProductPage />} />
        <Route path='/productos/nuevo' element={<NewProductPage />} />
        <Route path='/productos/editar/:id' element={<EditProductPage />} />
        <Route path='/error-conexion' element={<ErrorConexion />} />
        <Route path='/productos/editar/' element={<Navigate to="/productos" />} />
        <Route path='ventas' element={<RecordPage />} />
      </Routes>
    </Router>
  )
}
