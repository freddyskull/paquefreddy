import { create } from 'zustand'
import PocketBase from 'pocketbase'
const client = new PocketBase('http://192.168.0.25:8090')
client.autoCancellation(false)

export const useConfigStore = create((set, get) => ({
  config: {
    item: {},
    load: false
  },
  getConfig: async () => {
    const resp = await client.collection('config').getFullList()
    set(state => ({
      ...state,
      config: {
        item: resp[0],
        load: true
      }
    }))
  },
  editConfig: async (data) => {
    await client.collection('config').update(data.id, data)
    get().getConfig()
  }
}))
