import React, { useState } from 'react';
import Layout from '../layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useBlacklistStore } from '@/store/blacklistStore';
import { DefaultDatatable } from '@/components/dataTable/default/defaultDatatable';
import { Button } from '@/components/ui/button';
import { Eye, Pencil, Plus, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ConfirmationDialog } from '@/components/dialogs/ConfirmationDialog';

export const Blacklist = () => {
  const navigate = useNavigate();
  const { blacklist, deleteBlacklist } = useBlacklistStore();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsConfirmOpen(true);
  };

  const handleConfirmClose = async (confirmed) => {
    if (confirmed && deleteId != null) {
      await deleteBlacklist(deleteId);
    }
    setIsConfirmOpen(false);
    setDeleteId(null);
  };

  

  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
      center: true,
      cell: ({ row }) => (
        <span className="rounded-md bg-slate-300/80 px-3 py-1 text-center text-xs font-bold text-slate-500">
          {row.original.id}
        </span>
      ),
    },
    {
      header: 'Nombre',
      accessorKey: 'name',
      enableSorting: false,
      cell: ({ row }) => (
        <p className="uppercase font-bold">
          {row.original.name}
        </p>
      ),
    },
    {
      header: 'Decripcion',
      accessorKey: 'description',
      enableSorting: false,
      cell: ({ row }) => (
        <p className="text-xs">
          {row.original.description || 'N/A'}
        </p>
      ),
    },
    {
      header: 'Email',
      accessorKey: 'email',
      enableSorting: false,
      cell: ({ row }) => (
        <div className="">
          <span className="rounded-md bg-slate-300 px-3 py-1 text-center text-xs font-bold text-slate-500">
            {row.original.email || 'N/A'}
          </span>
        </div>
      ),
    },
    {
      header: 'Telefono',
      accessorKey: 'phone',
      enableSorting: false,
      cell: ({ row }) => (
        <div className="">
          <span className="rounded-md bg-slate-300 px-3 py-1 text-center text-xs font-bold text-slate-500">
            {row.original.phone || 'N/A'}
          </span>
        </div>
      ),
    },
    {
      header: 'Direccion',
      accessorKey: 'address',
      enableSorting: false,
      cell: ({ row }) => (
        <div className="">
          <span className="rounded-md bg-slate-300 px-3 py-1 text-center text-xs font-bold text-slate-500">
            {row.original.address || 'N/A'}
          </span>
        </div>
      ),
    },
    {
      header: 'Pendientes',
      accessorKey: 'records',
      center: true,
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-2">
          <span className={
            row.original.records.length > 0 ? 'rounded-md bg-slate-300 px-3 py-1 text-center text-xs font-bold text-slate-500' : 'rounded-md bg-primary px-3 py-1 text-center text-xs font-bold text-white'
          }>
            {row.original.records.length > 0 ? row.original.records.length : 'Solvente'}
          </span>
        </div>
      ),
    },
    {
      header: 'Total',
      accessorKey: 'total',
      center: true,
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-2">
          <span className={
            row.original.records.length > 0 ? 'rounded-md bg-slate-300 px-3 py-1 text-center text-xs font-bold text-slate-500' : 'rounded-md bg-primary px-3 py-1 text-center text-xs font-bold text-white'
          }>
            {row.original.records.length > 0 ? row.original.total : 'Solvente'}
          </span>
        </div>
      ),
    },
    {
      header: 'Acciones',
      center: true,
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(`${row.original.id}`)}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(`editar/${row.original.id}`)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleDelete(row.original.id)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Card className="h-[90vh] w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="uppercase flex gap-2 items-center">
              Lista negra
              <span className="text-xs text-slate-500 dark:text-slate-300 text-[10px] font-bold">Numero de clientes: {blacklist.length}</span>
            </CardTitle>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate(`/lista-negra/nuevo`)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <DefaultDatatable
            data={blacklist}
            columns={columns}
            searchFields={['name', 'email', 'phone', 'address']}
            showDateFilter={false}
            showTimeFilter={false}
          />
        </CardContent>
      </Card>
      <ConfirmationDialog
        isOpen={isConfirmOpen}
        onClose={handleConfirmClose}
        title="¿Eliminar este usuario?"
        description="Esta acción no se puede deshacer. ¿Desea eliminar este usuario de la lista negra?"
      />
    </Layout>
  );
};
