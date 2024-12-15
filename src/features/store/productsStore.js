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
    await client.collection('products').create(data)
    get().getProducts()
  },
  editProduct: async (data) => {
    await client.collection('products').update(data.id, data)
    get().getProducts()
  },
  deleteProduct: async (id) => {
    await client.collection('products').delete(id)
    get().getProducts()
  }
}))
