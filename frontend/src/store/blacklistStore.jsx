import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'
import { handleError } from '../utils/errorHandler'
import { toast } from 'sonner'

export const useBlacklistStore = create((set, get) => ({
  blacklist: [],
  selectedBlacklist: null,
  isLoading: false,
  error: null,

  // Fetch all blacklist entries
  fetchBlacklist: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get('blacklist')
      set({ blacklist: response.data })
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Fetch a single blacklist entry by ID
  fetchBlacklistItem: async (id) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get(`blacklist/${id}`)
      set({ selectedBlacklist: response.data })
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  getBlacklistById: async (id) => {
    try {
      const response = await axiosInstance.get(`blacklist/${id}`)
      return response.data
    } catch (error) {
      handleError(error)
      return null
    }
  },

  // Create a new blacklist entry
  createBlacklist: async (entry) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.post('blacklist', entry)
      const newList = response.data.data ?? response.data
      // If backend returns full list, replace. Otherwise, append.
      if (Array.isArray(newList)) {
        set({ blacklist: newList })
      } else if (newList) {
        const { blacklist } = get()
        set({ blacklist: [newList, ...blacklist] })
      }
      get().fetchBlacklist()
      toast('Elemento agregado a la lista negra')
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Update a blacklist entry completely
  updateBlacklist: async (entry) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.patch(`blacklist/${entry.id}`, entry)
      const updated = response.data
      const { blacklist } = get()
      set({
        blacklist: blacklist.map((e) => (e.id === updated.id ? updated : e)),
      })
      toast('Elemento de la lista negra actualizado')
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Partial update of a blacklist entry
  patchBlacklist: async (id, updates) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.patch(`blacklist/${id}`, updates)
      const updated = response.data
      const { blacklist } = get()
      set({
        blacklist: blacklist.map((e) => (e.id === updated.id ? updated : e)),
      })
      toast('Elemento de la lista negra actualizado')
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Delete a blacklist entry
  deleteBlacklist: async (id) => {
    set({ isLoading: true, error: null })
    try {
      await axiosInstance.delete(`blacklist/${id}`)
      const { blacklist } = get()
      set({ blacklist: blacklist.filter((e) => e.id !== id) })
      toast('Elemento eliminado de la lista negra')
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Select a blacklist entry
  selectBlacklist: (entry) => {
    set({ selectedBlacklist: entry })
  },

  // Clear selected blacklist entry
  clearSelectedBlacklist: () => {
    set({ selectedBlacklist: null })
  },

  // Clear all state
  clearState: () => {
    set({
      blacklist: [],
      selectedBlacklist: null,
      isLoading: false,
      error: null,
    })
  },
}))

