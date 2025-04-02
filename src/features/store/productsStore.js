import { create } from 'zustand'
import { handleCollectionOperation } from '../../utils/handleCollectionOperation'

export const useProductsStore = create((set, get) => ({
  products: {
    items: [],
    load: false
  },
  getProducts: async () => {
    try {
      const products = await handleCollectionOperation('get', 'products', {
        sort: '-created',
        expand: 'categorie_clt'
      })
      set(state => ({
        ...state,
        products: {
          items: products,
          load: true
        }
      }))
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },

  addNewProduct: async (data) => {
    try {
      await handleCollectionOperation('create', 'products', data)
      get().getProducts()
    } catch (error) {
      console.error('Error adding new product:', error)
    }
  },

  editProduct: async (data) => {
    try {
      await handleCollectionOperation('update', 'products', data)
      get().getProducts()
    } catch (error) {
      console.error('Error editing product:', error)
    }
  },

  deleteProduct: async (id) => {
    try {
      await handleCollectionOperation('delete', 'products', id)
      get().getProducts()
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }
}))
