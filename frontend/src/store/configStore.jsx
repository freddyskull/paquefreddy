import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'
import { errorHandler } from '../utils/errorHandler'

export const useConfigStore = create((set, get) => {
  // Initialize currency in localStorage if it doesn't exist
  if (!localStorage.getItem('currency')) {
    localStorage.setItem('currency', 'BS')
  }
  const defaultCurrency = localStorage.getItem('currency')
  
  return {
    config: null,
    isLoading: true,
    error: null,
    currency: defaultCurrency,

    // Fetch all configurations
    fetchConfig: async () => {
      set({ isLoading: true, error: null })
      try {
        const response = await axiosInstance.get('config')
        set({ config: response.data })
      } catch (error) {
        errorHandler.handleApiError(error)
        set({ error: error.message })
      } finally {
        set({ isLoading: false })
      }
    },

    // Update configuration
    updateConfig: async (dto) => {
      set({ isLoading: true, error: null })
      try {
        const response = await axiosInstance.put('config', dto)
        const updatedConfig = response.data.data
        set({ config: updatedConfig })
        toast("Configuración actualizada exitosamente")
      } catch (error) {
        errorHandler.handleApiError(error)
        set({ error: error.message })
      } finally {
        set({ isLoading: false })
      }
    },

    // Set currency
    setCurrency: (currency) => {
      if (['USD', 'BS'].includes(currency)) {
        localStorage.setItem('currency', currency)
        set({ currency })
      }
    },

    // Clear state
    clearState: () => {
      set({ config: null, isLoading: false, error: null, currency: 'BS' })
      localStorage.removeItem('currency')
    }
  }
})
