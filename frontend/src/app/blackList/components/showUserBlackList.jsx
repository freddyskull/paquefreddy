import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useBlacklistStore } from '@/store/blacklistStore'
import Layout from '@/app/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export const ShowUserBlackList = () => {
  const { id } = useParams();
  const { getBlacklistById } = useBlacklistStore();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const getUserById = async () => {
    const user = await getBlacklistById(id);
    setData(user);
  };

  useEffect(() => {
    getUserById();
  },[]);

  return (
    <Layout>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="uppercase">Pendientes de {data?.name}</CardTitle>
          <Button variant="outline" onClick={() => navigate(-1)}>
            VOLVER
          </Button>
        </CardHeader>
        <CardContent>
          <p className="uppercase">Nombre: {data?.name}</p>
          <p className="uppercase">Email: {data?.email}</p>
          <p className="uppercase">Telefono: {data?.phone}</p>
          <p className="uppercase">Direccion: {data?.address}</p>
          <p className="uppercase">Descripcion: {data?.description}</p>
        </CardContent>
      </Card>
    </Layout>
  )
}
