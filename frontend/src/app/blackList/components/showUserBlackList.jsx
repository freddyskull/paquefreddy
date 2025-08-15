import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useBlacklistStore } from '@/store/blacklistStore';
import Layout from '@/app/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { DefaultDatatable } from '@/components/dataTable/default/defaultDatatable';
import { Switch } from '@/components/ui/switch';
import { CheckCheck, Eye } from 'lucide-react';
import { ConfirmationDialog } from '@/components/dialogs/ConfirmationDialog';
import { useRecordsStore } from '@/store/recordsStore';

export const ShowUserBlackList = () => {
  const { id } = useParams();
  const { fetchBlacklistRecordStatus, getBlacklistById } = useBlacklistStore();
  const { updateStatus } = useRecordsStore();
  const [dataPending, setDataPending] = useState([]); // status: true
  const [dataSolved, setDataSolved] = useState([]);   // status: false
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'solved'
  const [blackListData, setBlackListData] = useState(null);
  const navigate = useNavigate();

  const getUserById = useCallback(async () => {
    const [recordsPending, recordsSolved] = await Promise.all([
      fetchBlacklistRecordStatus(id, true),
      fetchBlacklistRecordStatus(id, false),
    ]);
    setDataPending(recordsPending || []);
    setDataSolved(recordsSolved || []);
    const user = await getBlacklistById(id);
    setBlackListData(user);
  }, [id, fetchBlacklistRecordStatus, getBlacklistById]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [pendingChange, setPendingChange] = useState({ id: null, status: false });

  const handleEdit = async (recId, nextStatus) => {
    try {
      await updateStatus(recId, nextStatus);
      // Optimistic local update so the table refreshes immediately
      const fromPending = dataPending.find((r) => r.id === recId);
      const fromSolved = dataSolved.find((r) => r.id === recId);
      const current = fromPending || fromSolved;
      if (current) {
        const updated = { ...current, status: nextStatus };
        if (nextStatus === true) {
          // Move to pending (true)
          setDataSolved((prev) => prev.filter((r) => r.id !== recId));
          setDataPending((prev) => {
            const exists = prev.some((r) => r.id === recId);
            return exists ? prev.map((r) => (r.id === recId ? updated : r)) : [updated, ...prev];
          });
        } else {
          // Move to solved (false)
          setDataPending((prev) => prev.filter((r) => r.id !== recId));
          setDataSolved((prev) => {
            const exists = prev.some((r) => r.id === recId);
            return exists ? prev.map((r) => (r.id === recId ? updated : r)) : [updated, ...prev];
          });
        }
      }
      // Optionally refresh from server to stay consistent
      // await getUserById();
    } catch {
      // Si falla, puedes recargar datos del servidor para mantener consistencia
      // await getUserById();
    }
  };

  const askChangeStatus = (recId, nextStatus) => {
    setPendingChange({ id: recId, status: nextStatus });
    setIsConfirmOpen(true);
  };

  const handleConfirmClose = async (confirmed) => {
    setIsConfirmOpen(false);
    if (confirmed && pendingChange.id != null) {
      handleEdit(pendingChange.id, pendingChange.status);
    }
    setPendingChange({ id: null, status: false });
  };

  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Total',
      accessorKey: 'totals',
      center: true,
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-2">
          <span className="text-primary font-bold">
            $
            {new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(row.original.totals.totalDolar)}
          </span>
        </div>
      ),
    },
    {
      header: 'Precio del dolar',
      accessorKey: 'dolar_price',
      center: true,
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-2">
          <span className="font-bold">
            {new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(row.original.dolar_price)} Bs
          </span>
        </div>
      ),
    },
    {
      header: 'Fecha',
      accessorKey: 'createdAt',
      center: true,
      cell: ({ row }) => {
        if (row.original.createdAt) {
          const dateObj = new Date(row.original.createdAt)
          const dateStr = dateObj.toLocaleDateString('es-VE', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
          })
          const timeStr = dateObj.toLocaleTimeString('es-VE', {
            hour: '2-digit',
            minute: '2-digit',
          })
          return (
            <span className="flex justify-center items-center font-bold text-center">
              {`${dateStr} - ${timeStr}`}
            </span>
          )
        }
        return (
          <span className="flex justify-center items-center font-bold text-center">
            N/A
          </span>
        )
      },
    },
    {
      header: 'Acciones',
      accessorKey: 'acciones',
      center: true,
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" onClick={() => navigate(`/ventas/detalles/${row.original.id}`)}>
            <Eye className="h-4 w-4" />
          </Button>
          {
            activeTab === 'pending' ? (
              <Button variant="outline" onClick={() => askChangeStatus(row.original.id, !row.original.status)}>
                <CheckCheck className="h-4 w-4" />
              </Button>
            ) : null
          }
        </div>
      ),
    },
  ];
  return (
    <Layout>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="uppercase">
            Pendientes de {blackListData?.name}
          </CardTitle>
          <Button variant="outline" onClick={() => navigate(-1)}>
            VOLVER
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center">
            <Button
              variant={activeTab === 'pending' ? 'default' : 'outline'}
              onClick={() => setActiveTab('pending')}
              className="uppercase rounded-none rounded-tl-lg rounded-bl-lg"
            >
              Pendientes
            </Button>
            <Button
              variant={activeTab === 'solved' ? 'default' : 'outline'}
              onClick={() => setActiveTab('solved')}
              className="uppercase rounded-none rounded-tr-lg rounded-br-lg"
            >
              Solventes
            </Button>
          </div>
          <DefaultDatatable
            data={activeTab === 'pending' ? dataPending : dataSolved}
            disableFilters={true}
            columns={columns}
          />
          <ConfirmationDialog
            isOpen={isConfirmOpen}
            onClose={handleConfirmClose}
            title="¿Cambiar estatus de la venta?"
            description={`Esta acción marcará la venta como ${pendingChange.status ? 'pendiente' : 'solvente'}.`}
          />
        </CardContent>
      </Card>
    </Layout>
  );
};
