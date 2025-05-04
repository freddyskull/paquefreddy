import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'

// Recursive error handler
const handleApiError = (error, parentError = '') => {
  if (error.response) {
    // Server responded with an error
    const errorMessage = error.response.data?.message || error.response.statusText
    return `${parentError}${parentError ? ' -> ' : ''}Server error: ${errorMessage}`
  } else if (error.request) {
    // Request made but no response
    return `${parentError}${parentError ? ' -> ' : ''}No response from server`
  } else {
    // Something happened in setting up the request
    return `${parentError}${parentError ? ' -> ' : ''}Request error: ${error.message}`
  }
}

export const useProductStore = create((set, get) => ({
  products: [],
  selectedProduct: null,
  isLoading: false,
  error: null,

  // Fetch all products
  fetchProducts: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get('products')
      set({ products: response.data })
    } catch (error) {
      set({ error: handleApiError(error, 'Failed to fetch products') })
    } finally {
      set({ isLoading: false })
    }
  },

  // Fetch a single product by ID or slug
  fetchProduct: async (id) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get(`products/${id}`)
      set({ selectedProduct: response.data })
    } catch (error) {
      set({ error: handleApiError(error, 'Failed to fetch product') })
    } finally {
      set({ isLoading: false })
    }
  },

  // Create a new product
  createProduct: async (product) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.post('products', product)
      const newProduct = response.data
      const { products } = get()
      set({ products: [...products, newProduct] })
    } catch (error) {
      set({ error: handleApiError(error, 'Failed to create product') })
    } finally {
      set({ isLoading: false })
    }
  },

  // Update a product completely
  updateProduct: async (product) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.put(`products/${product.id}`, product)
      const updatedProduct = response.data
      const { products } = get()
      set({
        products: products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)),
      })
    } catch (error) {
      set({ error: handleApiError(error, 'Failed to update product') })
    } finally {
      set({ isLoading: false })
    }
  },

  // Partial update of a product
  patchProduct: async (id, updates) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.patch(`products/${id}`, updates)
      const updatedProduct = response.data
      const { products } = get()
      set({
        products: products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)),
      })
    } catch (error) {
      set({ error: handleApiError(error, 'Failed to patch product') })
    } finally {
      set({ isLoading: false })
    }
  },

  // Delete a product
  deleteProduct: async (id) => {
    set({ isLoading: true, error: null })
    try {
      await axiosInstance.delete(`products/${id}`)
      const { products } = get()
      set({ products: products.filter((p) => p.id !== id) })
    } catch (error) {
      set({ error: handleApiError(error, 'Failed to delete product') })
    } finally {
      set({ isLoading: false })
    }
  },

  // Select a product
  selectProduct: (product) => set({ selectedProduct: product }),

  // Clear selected product
  clearSelectedProduct: () => set({ selectedProduct: null }),

  // Clear all state
  clearState: () => set({
    products: [],
    selectedProduct: null,
    isLoading: false,
    error: null,
  }),
}))
