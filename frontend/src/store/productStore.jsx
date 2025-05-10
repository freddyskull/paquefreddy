import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'
import { toast } from "sonner"
import { errorHandler } from '../utils/errorHandler'

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
      errorHandler.handleApiError(error)
      set({ error: error.message })
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
      errorHandler.handleApiError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Create a new product
  createProduct: async (product) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.post('products', product)
      const newProduct = response.data.data
      const { products } = get()
      set({ products: [...products, newProduct] })
      toast("Producto creado exitosamente")
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
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
      toast("Producto actualizado exitosamente")
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Partial update of a product
  patchProduct: async (id, updates) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.patch(`products/${id}`, updates)
      const updatedProduct = response.data.data
      const { products } = get()
      
      // Crear una nueva lista de productos actualizada
      const newProducts = products.map((product) => 
        product.id === id ? updatedProduct : product
      )
      set({ products: newProducts })
      toast("Producto actualizado exitosamente")
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
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
      toast("Producto eliminado exitosamente")
    } catch (error) {
      errorHandler.handleApiError(error)
      set({ error: error.message })
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
