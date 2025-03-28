import { create } from 'zustand'
import PocketBase from 'pocketbase'
const client = new PocketBase('http://192.168.0.25:8090')
client.autoCancellation(false)

export const useProductsStore = create((set, get) => ({
  products: {
    items: [],
    load: false
  },
  getProducts: async () => {
    const products = await client.collection('products').getFullList({
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
  },

  addNewProduct: async (data) => {
    try {
      await client.collection('products').create(data)
      get().getProducts()
    } catch (error) {
      console.error(error)
    }
  },
  editProduct: async (data) => {
    try {
      await client.collection('products').update(data.id, data)
      get().getProducts()
    } catch (error) {
      console.error(error)
    }
  },
  deleteProduct: async (id) => {
    try {
      await client.collection('products').delete(id)
      get().getProducts()
    } catch (error) {
      console.error(error)
    }
  }
}))
