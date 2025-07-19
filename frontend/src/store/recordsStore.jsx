import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'
import { toast } from "sonner"
import { handleError } from '../utils/errorHandler'

export const useRecordsStore = create((set, get) => ({
  records: [],
  selectedRecord: null,
  isLoading: false,
  error: null,

  // Fetch all records
  fetchRecords: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get('records')
      set({ records: response.data })
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: true })
    }
  },

  // Fetch a single record by ID
  fetchRecord: async (id) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get(`records/${id}`)
      return response.data
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: true })
    }
  },

  // Create a new record
  createRecord: async (record) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.post('records', record)
      const newRecord = response.data
      set({ records: [...get().records, newRecord] })
      toast.success("La venta fue realizada puede ver los detalles en el historial de ventas, el ID es: " + newRecord.id, {
        action: {
          label: 'Ver ventas',
          onClick: () => window.location.href = '/ventas/detalles/' + newRecord.id
        },
      })
      return 'success'
    } catch (error) {
      handleError(error)
      set({ error: error.response.data })
      toast.error(error.response.data.message || "Error al crear el registro")
      throw error
    } finally {
      set({ isLoading: true })
    }
  },

  // Update a record
  updateRecord: async (record) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.put(`records/${record.id}`, record)
      const updatedRecord = response.data
      set({
        records: get().records.map(r => r.id === record.id ? updatedRecord : r)
      })
      toast("Registro actualizado exitosamente")
      return updatedRecord
    } catch (error) {
      handleError(error)
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: true })
    }
  },

  // Delete a record
  deleteRecord: async (id) => {
    set({ isLoading: true, error: null })
    try {
      await axiosInstance.delete(`records/${id}`)
      set({
        records: get().records.filter(record => record.id !== id),
        selectedRecord: null
      })
      toast("Registro eliminado exitosamente")
    } catch (error) {
      handleError(error)
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: true })
    }
  },


  // Select a record
  selectRecord: (record) => set({ selectedRecord: record }),

  // Clear selected record
  clearSelectedRecord: () => set({ selectedRecord: null }),

  // Clear all state
  clearState: () => set({
    records: [],
    selectedRecord: null,
    isLoading: true,
    error: null
  })
}))
