import { toast } from 'sonner';

export const errorHandler = {
  handle400Error: (error: any) => {
    const errorMessage = error?.response?.data?.message || 'Error al procesar la solicitud';
    toast(errorMessage);
  },

  handleApiError: (error: any) => {
    switch (error?.response?.status) {
      case 400:
        return errorHandler.handle400Error(error);
      case 401:
        toast('No autorizado');
        break;
      case 404:
        toast('Recurso no encontrado');
        break;
      default:
        toast('Error al procesar la solicitud');
    }
  }
};
