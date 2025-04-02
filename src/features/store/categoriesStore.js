import { create } from 'zustand'
import { handleCollectionOperation } from '../../utils/handleCollectionOperation'

export const useCategoriesStore = create((set, get) => ({
  categories: {
    items: [],
    load: false
  },
  getCategories: async () => {
    try {
      const resp = await handleCollectionOperation('get', 'category', {
        sort: '-created'
      })
      set(state => ({
        ...state,
        categories: {
          items: resp,
          load: true
        }
      }))
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  },
  editCategories: async (data) => {
    try {
      await handleCollectionOperation('update', 'category', data)
      get().getCategories()
    } catch (error) {
      console.error('Error editing category:', error)
    }
  },
  addCategories: async (data) => {
    try {
      await handleCollectionOperation('create', 'category', data)
      get().getCategories()
    } catch (error) {
      console.error('Error adding category:', error)
    }
  },
  deleteCategory: async (id) => {
    try {
      await handleCollectionOperation('delete', 'category', id)
      get().getCategories()
    } catch (error) {
      console.error('Error deleting category:', error)
    }
  }
}))
