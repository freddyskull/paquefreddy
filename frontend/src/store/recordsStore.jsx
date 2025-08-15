import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'
import { toast } from "sonner"
import { handleError } from '../utils/errorHandler'

export const useRecordsStore = create((set, get) => ({
  records: [],
  selectedRecord: null,
  isLoading: false,
  error: null,
  totalRecordsCurrent: {},
  totalRecordsPrevious: {},
  totalRecordsLoading: false,


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
          onClick: () => window.open('/ventas/detalles/' + newRecord.id, '_blank')
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
    }
  },

  updateStatus: async (id, status) => {
    try {
      const response = await axiosInstance.patch(`records/status/${id}`, { status })
      const updatedRecord = response.data
      set({ records: get().records.map(r => r.id === id ? updatedRecord : r) })
      toast.success("La venta ha sido actualizada ahora se mostrará en el tab de " + (status ? "pendientes" : "solventes"))
      return updatedRecord
    } catch (error) {
      handleError(error)
      set({ error: error.message })
      throw error
    }
  },

  // Delete a record
  deleteRecord: async (id) => {
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
    }
  },

  // query for date-range

  queryRecordsByDateRange: async (startDate, endDate) => {
    try {
      const response = await axiosInstance.get('/records/date-range', {
        params: {
          startDate,
          endDate
        }
      })
      return response.data
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    }
  },


  calculateRecordsTotals: async () => {
    try {
      const now = new Date()
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10)
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().slice(0, 10)
      const firstDayOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString().slice(0, 10)
      const lastDayOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).toISOString().slice(0, 10)
      const totalCurrent = await get().queryRecordsByDateRange(firstDayOfMonth, lastDayOfMonth)
      const totalPrevious = await get().queryRecordsByDateRange(firstDayOfLastMonth, lastDayOfLastMonth)
      set({
        totalRecordsCurrent: totalCurrent,
        totalRecordsPrevious: totalPrevious
      })
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    }
  },

  // Select a record
  selectRecord: (record) => set({ selectedRecord: record }),

  // Clear selected record
  clearSelectedRecord: () => set({ selectedRecord: null }),

  salesStats: async (startDate, endDate, lowThreshold = 8, highThreshold = 40) => {
    try {
      const response = await axiosInstance.get(`records/sales-stats`, {
        params: {
          startDate,
          endDate,
          lowThreshold,
          highThreshold
        }
      })
      return response.data
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    }
  },


  // Clear all state
  clearState: () => set({
    records: [],
    selectedRecord: null,
    error: null
  })
}))
