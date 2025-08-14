import React from 'react';
import Layout from '@/app/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { ChadCnFormInput } from '@/components/inputs/chadCnFormInput';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useBlacklistStore } from '@/store/blacklistStore';

const userSchema = z.object({
  name: z.string().min(2, 'tener al menos 2 caracteres'),
  email: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
});

export const AddUserBlackList = ({ user }) => {
  const { createBlacklist, updateBlacklist } = useBlacklistStore()
  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      description: '',
    },
    mode: 'onChange',
  });

  React.useEffect(() => {
    if (user) {
      form.reset({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        description: user.description || '',
      });
    }
  }, [user, form]);

  const onSubmit = (data) => {
    const normalized = {
      ...data,
      email: data.email?.trim() ? data.email.trim() : null,
      phone: data.phone?.trim() ? data.phone.trim() : null,
      address: data.address?.trim() ? data.address.trim() : null,
      description: data.description?.trim() ? data.description.trim() : null,
    };
    if (user?.id) {
      updateBlacklist({ ...normalized, id: user.id })
    } else {
      createBlacklist(normalized)
    }
    navigate(`/lista-negra`)
  };

  const navigate = useNavigate();
  return (
    <Layout>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="uppercase">{user?.id ? 'Editar' : 'Agregar'} usuario a la lista negra</CardTitle>
          <Button
            variant="outline"
            onClick={() => navigate(`/lista-negra`)}
          >
            VOLVER
          </Button>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <ChadCnFormInput
                  control={form.control}
                  name="name"
                  label="Nombre *"
                  
                  placeholder="Nombre del cliente"
                />
                <ChadCnFormInput
                  control={form.control}
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Email del cliente"
                />
                <ChadCnFormInput
                  control={form.control}
                  name="phone"
                  label="Telefono"
                  placeholder="Telefono del cliente"
                />
                <ChadCnFormInput
                  control={form.control}
                  name="address"
                  label="Direccion"
                  placeholder="Direccion del cliente"
                />
              </div>
              <ChadCnFormInput
                  control={form.control}
                  name="description"
                  label="Descripcion"
                  type="textarea"
                  placeholder="Descripcion del cliente"
                />
              <Button type="submit" className="uppercase">{user?.id ? 'Editar' : 'Agregar'} cliente</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Layout>
  );
};
