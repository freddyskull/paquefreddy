/* eslint-disable indent */
import { create } from 'zustand'
import { handleCollectionOperation } from '../../utils/handleCollectionOperation'

export const useSalesRecordsStore = create((set, get) => ({
  salesRecords: {
    items: [],
    load: false
  },
  getSalesRecords: async () => {
    try {
      const records = await handleCollectionOperation('get', 'record', {
        sort: '-created',
        expand: 'black_list_clt'
      })
      set(state => ({
        ...state,
        salesRecords: {
          items: records,
          load: true
        }
      }))
    } catch (error) {
      console.error('Error fetching sales records:', error)
    }
  },

  addNewSalesRecord: async (data) => {
    try {
      await handleCollectionOperation('create', 'record', data)
      get().getSalesRecords()
    } catch (error) {
      console.error('Error adding new sales record:', error)
    }
  },

  editSalesRecord: async (data) => {
    try {
      await handleCollectionOperation('update', 'record', data)
      get().getSalesRecords()
    } catch (error) {
      console.error('Error editing sales record:', error)
    }
  },

  deleteSalesRecord: async (id) => {
    try {
      await handleCollectionOperation('delete', 'record', id)
      get().getSalesRecords()
    } catch (error) {
      console.error('Error deleting sales record:', error)
    }
  }
}))
