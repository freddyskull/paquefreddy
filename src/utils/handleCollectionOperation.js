/* eslint-disable indent */
import PocketBase from 'pocketbase'

const client = new PocketBase('https://89s4zc3w-8090.use2.devtunnels.ms')
client.autoCancellation(false)

export const handleCollectionOperation = async (operation, collection, data = null) => {
  try {
    switch (operation) {
      case 'get':
        return await client.collection(collection).getFullList(data)
      case 'create':
        return await client.collection(collection).create(data)
      case 'update':
        return await client.collection(collection).update(data.id, data)
      case 'delete':
        return await client.collection(collection).delete(data)
      default:
        throw new Error('Operación no soportada')
    }
  } catch (error) {
    console.error(`Error en operación ${operation} para la colección ${collection}:`, error)
    throw error
  }
}
