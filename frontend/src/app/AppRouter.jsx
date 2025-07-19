import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ProductPage } from './products/productPage'
import { NewProductPage } from './products/newProductPage'
import { EditProductPage } from './products/editProductPage'
import { ErrorConexion } from '../error-conexion'
import { Home } from './home/home'
import { RecordPage } from './records/recordPage'
import { NoRouteUrl } from './no-exist/noRouteUrl'
import { SinStockPage } from './sin-stock/sinStockPage'
import { RecordDetails } from './records/recordDetails'
import { CategoriePage } from './categories/categoriePage'
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
        <Route path='/productos/sin-stock' element={<SinStockPage />} />
        <Route path='/error-conexion' element={<ErrorConexion />} />
        <Route path='/productos/editar/' element={<Navigate to="/productos" />} />
        <Route path='ventas' element={<RecordPage />} />
        <Route path='/ventas/detalles/:id' element={<RecordDetails />} />
        <Route path='/categorias' element={<CategoriePage />} />
      </Routes>
    </Router>
  )
}
