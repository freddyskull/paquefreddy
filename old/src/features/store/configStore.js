import { create } from 'zustand'
import { handleCollectionOperation } from '../../utils/handleCollectionOperation'

export const useConfigStore = create((set, get) => ({
  config: {
    item: {},
    load: false
  },
  getConfig: async () => {
    try {
      const resp = await handleCollectionOperation('get', 'config', {
        sort: '-created'
      })
      set(state => ({
        ...state,
        config: {
          item: resp[0],
          load: true
        }
      }))
    } catch (error) {
      console.error('Error fetching config:', error)
    }
  },
  editConfig: async (data) => {
    try {
      await handleCollectionOperation('update', 'config', data)
      get().getConfig()
    } catch (error) {
      console.error('Error editing config:', error)
    }
  }
}))
