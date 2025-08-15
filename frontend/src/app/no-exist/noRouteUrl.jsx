import React from 'react'
import Layout from '../layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { useConfigStore } from '@/store/configStore'

export const NoRouteUrl = () => {
  const { currency } = useConfigStore()
  return (
    <Layout>
      <Card className=" shadow-lg w-full h-[90vh] overflow-hidden">
        <div className='flex flex-col justify-center items-center mx-auto h-[90vh] overflow-hidden container'>
          <img src='/cry.png' width="500" alt='404 Not Found' className='mb-4 w-32' />
          <h1 className='mt-6 font-bold text-4xl text-center uppercase'>404 - Página no encontrada</h1>
          <p className='mt-2 text-center'>Lo sentimos, la página que buscas no existe o aún está en construcción</p>
          <Link to="/" className="">
            <Button className={`mt-6 uppercase ${currency === 'BS' ? 'bg-primary hover:bg-primary/90' : 'bg-usd hover:bg-usd/90'}`}>
              Volver al inicio
            </Button>
          </Link>
        </div>
      </Card>
    </Layout>
  )
}
