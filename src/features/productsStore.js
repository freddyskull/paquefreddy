import { create } from 'zustand'
import PocketBase from 'pocketbase'
const client = new PocketBase('http://192.168.0.25:8090')
client.autoCancellation(false)

export const useProductsStore = create((set) => ({
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
  }
}))
