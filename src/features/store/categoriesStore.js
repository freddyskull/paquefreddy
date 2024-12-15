import { create } from 'zustand'
import PocketBase from 'pocketbase'
const client = new PocketBase('http://192.168.0.25:8090')
client.autoCancellation(false)

export const useCategoriesStore = create((set, get) => ({
  categories: {
    items: {},
    load: false
  },
  getCategories: async () => {
    const resp = await client.collection('category').getFullList()
    set(state => ({
      ...state,
      categories: {
        items: resp,
        load: true
      }
    }))
  },
  editCategories: async (data) => {
    await client.collection('category').update(data.id, data)
    get().getCategories()
  },
  addCategories: async (data) => {

  }
}))
