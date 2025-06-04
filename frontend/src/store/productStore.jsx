import { create } from 'zustand'
import { axiosInstance } from '../config/axios.config'
import { toast } from "sonner"
import { handleError } from '../utils/errorHandler'

export const useProductStore = create((set, get) => ({
  products: [],
  selectedProduct: null,
  isLoading: false,
  error: null,
  selectedProducts: [],
  calculateTotal: {totalBs: 0, totalDolar: 0, totalProfits: 0},

  // Fetch all products
  fetchProducts: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await axiosInstance.get('products')
      set({ products: response.data })
    } catch (error) {
      handleError(error)
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
      return response.data
    } catch (error) {
      handleError(error)
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
      set({ products: [...newProduct] })
      toast("Producto creado exitosamente")
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Clear selected products
  clearSelectedAllProducts: () => {
    set({ selectedProducts: [], calculateTotal: {totalBs: 0, totalDolar: 0, totalProfits: 0} })
  },

  

  // Update a product completely
  updateProduct: async (product) => {
    set({ isLoading: true, error: null })
    try {
      product.expiration == '' ? product.expiration = null : product.expiration 
      const response = await axiosInstance.put(`products/${product.id}`, product)
      const updatedProduct = response.data.data
      const { products } = get()
      set({
        products: products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)),
      })
      toast("Producto actualizado exitosamente")
    } catch (error) {
      handleError(error)
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  // Add product to selectedProducts
  addSelectedProduct: (product) => {
    const newProduct = {...product, quantity: 1}
    const { selectedProducts } = get()
    if (!selectedProducts.some(p => p.id === product.id)) {
      set({ selectedProducts: [...selectedProducts, newProduct] })
    }
    toast(`Se agregó "${product.name}" a la calculadora.`)
    get().calculateTotalProducts()
  },

  // calculate total
  calculateTotalProducts: () => {
    const { selectedProducts } = get()
    let totalBs = 0;
    let totalUsd = 0;
    let totalProfits = 0;
    selectedProducts.map(item => {
      totalBs += item.price_bs * item.quantity;
      totalUsd += item.price * item.quantity;
      totalProfits += item.profit * item.quantity;
    })
    set({ calculateTotal: {totalBs, totalDolar: totalUsd, totalProfits} })
  },

  // toggle selected product
  toggleSelectedProduct: (productId) => {
    const { selectedProducts, products } = get()
    if (selectedProducts.some(p => p.id === productId)) {
      set({ selectedProducts: selectedProducts.filter(p => p.id !== productId) })
    } else {
      const product = products.find(p => p.id === productId)
      const newProduct = {...product, quantity: 1}
      if (product) {
        set({ selectedProducts: [...selectedProducts, newProduct] })
      }
    }
  },


  // update selected product quantity
  updateSelectedProductQuantity: (productId, quantity) => {
    const { selectedProducts } = get()
    const updatedProducts = selectedProducts.map(p =>
      p.id === productId ? { ...p, quantity } : p
    )
    set({ selectedProducts: updatedProducts })
  },

  // Remove product from selectedProducts
  removeSelectedProduct: (productId) => {
    const { selectedProducts } = get()
    set({ selectedProducts: selectedProducts.filter(p => p.id !== productId) })
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
      handleError(error)
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
      handleError(error)
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
