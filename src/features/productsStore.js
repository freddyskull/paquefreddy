import create from 'zustand'

const useProductStore = create((set) => ({
  products: [],

  // getProduct: (id) => {
  //   const products = get().products
  //   return products.find((product) => product.id === id)
  // },

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product]
    })),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id)
    }))
}))

export default useProductStore
