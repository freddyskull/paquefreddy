import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'

// Recursive error handler
const handleApiError = (error, parentError = '') => {
  if (error.response) {
    const errorMessage = error.response.data?.message || error.response.statusText
    return `${parentError}${parentError ? ' -> ' : ''}Server error: ${errorMessage}`
  } else if (error.request) {
    return `${parentError}${parentError ? ' -> ' : ''}No response from server`
  } else {
    return `${parentError}${parentError ? ' -> ' : ''}Request error: ${error.message}`
  }
}

export const useConfigStore = create((set, get) => {
  // Initialize currency in localStorage if it doesn't exist
  if (!localStorage.getItem('currency')) {
    localStorage.setItem('currency', 'BS')
  }
  const defaultCurrency = localStorage.getItem('currency')
  
  return {
    config: null,
    isLoading: false,
    error: null,
    currency: defaultCurrency,

    // Fetch all configurations
    fetchConfig: async () => {
      set({ isLoading: true, error: null })
      try {
        const response = await axiosInstance.get('config')
        set({ config: response.data })
      } catch (error) {
        set({ error: handleApiError(error, 'Failed to fetch config') })
      } finally {
        set({ isLoading: false })
      }
    },

    // Update configuration
    updateConfig: async (dto) => {
      set({ isLoading: true, error: null })
      try {
        const response = await axiosInstance.put('config', dto)
        set({ config: response.data })
      } catch (error) {
        set({ error: handleApiError(error, 'Failed to update config') })
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
