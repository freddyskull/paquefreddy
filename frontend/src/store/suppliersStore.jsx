import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'
import { toast } from "sonner"
import { handleError } from '../utils/errorHandler'

export const useSuppliersStore = create((set, get) => ({
  suppliers: [],
  selectedSupplier: null,
  isLoading: false,
  error: null,

  // Fetch all suppliers
  fetchSuppliers: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get('suppliers')
      set({ suppliers: response.data })
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Fetch a single supplier by ID
  fetchSupplier: async (id) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get(`suppliers/${id}`)
      set({ selectedSupplier: response.data })
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Create a new supplier
  createSupplier: async (supplier) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.post('suppliers', supplier)
      const newSupplier = response.data.data
      const { suppliers } = get()
      set({ suppliers: [...suppliers, newSupplier] })
      toast("Proveedor creado exitosamente")
      return newSupplier
    } catch (error) {
      handleError(error)
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  // Update a supplier completely
  updateSupplier: async (supplier) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.put(`suppliers/${supplier.id}`, supplier)
      const updatedSupplier = response.data
      const { suppliers } = get()
      set({
        suppliers: suppliers.map((s) => (s.id === updatedSupplier.id ? updatedSupplier : s)),
      })
      toast("Proveedor actualizado exitosamente")
      return updatedSupplier
    } catch (error) {
      handleError(error)
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  // Partial update of a supplier
  patchSupplier: async (id, updates) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.patch(`suppliers/${id}`, updates)
      const updatedSupplier = response.data.data
      const { suppliers } = get()
      
      const newSuppliers = suppliers.map((supplier) => 
        supplier.id === id ? updatedSupplier : supplier
      )
      set({ suppliers: newSuppliers })
      toast("Proveedor actualizado exitosamente")
      return updatedSupplier
    } catch (error) {
      handleError(error)
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  // Delete a supplier
  deleteSupplier: async (id) => {
    set({ isLoading: true, error: null })
    try {
      await axiosInstance.delete(`suppliers/${id}`)
      const { suppliers } = get()
      set({ suppliers: suppliers.filter((s) => s.id !== id) })
      toast("Proveedor eliminado exitosamente")
      return true
    } catch (error) {
      handleError(error)
      set({ error: error.message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  // Select a supplier
  selectSupplier: (supplier) => set({ selectedSupplier: supplier }),

  // Clear selected supplier
  clearSelectedSupplier: () => set({ selectedSupplier: null }),

  // Clear all state
  clearState: () => set({
    suppliers: [],
    selectedSupplier: null,
    isLoading: false,
    error: null,
  }),
}))
