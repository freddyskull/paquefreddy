import React from 'react'
import Layout from '../layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export const NoRouteUrl = () => {
  return (
    <Layout>
      <Card className="bg-white dark:bg-gray-800 shadow-lg w-full h-[90vh] overflow-hidden">
        <div className='flex flex-col justify-center items-center mx-auto h-[90vh] overflow-hidden container'>
          <img src='/cry.png' width="500" alt='404 Not Found' className='mb-4 w-32' />
          <h1 className='mt-6 font-bold text-4xl text-center uppercase'>404 - Página no encontrada</h1>
          <p className='mt-2 text-center'>Lo sentimos, la página que buscas no existe o aún está en construcción</p>
          <Link to="/" className="">
            <Button className="mt-6 uppercase">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </Card>
    </Layout>
  )
}
