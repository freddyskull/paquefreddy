import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'
import { errorHandler } from '../utils/errorHandler'
import { toast } from "sonner"

export const useCategoriesStore = create((set, get) => ({
  categories: [],
  selectedCategory: null,
  isLoading: false,
  error: null,

  // Fetch all categories
  fetchCategories: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get('categories')
      set({ categories: response.data })
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Fetch a single category by ID
  fetchCategory: async (id) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get(`categories/${id}`)
      set({ selectedCategory: response.data })
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Create a new category
  createCategory: async (category) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.post('categories', category)
      const newCategory = response.data.data
      set({ categories: newCategory })
      toast("Categoria creada exitosamente")
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Update a category completely
  updateCategory: async (category) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.put(`categories/${category.id}`, category)
      const updatedCategory = response.data
      const { categories } = get()
      set({
        categories: categories.map((c) => (c.id === updatedCategory.id ? updatedCategory : c)),
      })
      toast("Categoria actualizada exitosamente")
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Partial update of a category
  patchCategory: async (id, updates) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.patch(`categories/${id}`, updates)
      const updatedCategory = response.data
      const { categories } = get()
      set({
        categories: categories.map((c) => (c.id === updatedCategory.id ? updatedCategory : c)),
      })
      toast("Categoria actualizada exitosamente")
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Delete a category
  deleteCategory: async (id) => {
    set({ isLoading: true, error: null })
    try {
      await axiosInstance.delete(`categories/${id}`)
      const { categories } = get()
      set({ categories: categories.filter((c) => c.id !== id) })
      toast("Categoria eliminada exitosamente")
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Select a category
  selectCategory: (category) => {
    set({ selectedCategory: category })
  },

  // Clear selected category
  clearSelectedCategory: () => {
    set({ selectedCategory: null })
  },

  // Clear all state
  clearState: () => {
    set({
      categories: [],
      selectedCategory: null,
      isLoading: false,
      error: null,
    })
  },
}))
