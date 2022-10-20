import { createSlice } from '@reduxjs/toolkit'

export const ProductsSlice = createSlice({
  name: 'productsPage',
  initialState: {
    loader: true,
    modal: false,
    currentPage: 1,
    recordsPerPage: 5,
    productId: 3,
  },
  reducers: {
    setLoader: (state) => {
      state.loader = false
    },
    showModal: (state) => {
      state.modal = true
    },
    closeModal: (state) => {
      state.modal = false
    },
    setIncrementCurrentPage: (state) => {
      state.currentPage += 1
    },
    setDecrementCurrentPage: (state) => {
      state.currentPage -= 1
    },
    setProductId: (state, action) => {
      state.productId = action.payload
    },
  },
})

export const { setLoader, showModal, closeModal, setIncrementCurrentPage, setDecrementCurrentPage, setProductId } = ProductsSlice.actions

export default ProductsSlice.reducer
