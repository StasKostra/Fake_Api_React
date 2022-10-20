import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basketProduct: [],
    totalPrice: 0,
    basketModal: false,
    disabled: false
  },
  reducers: {
    setBasketProduct: (state, action) => {
      state.basketProduct.push(action.payload)
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload.map(o => o.price).reduce((a, c) => { return a + c })
    },
    setClearBasketProduct: (state) => {
      state.basketProduct.splice(0, state.basketProduct.length)
    },
    setBasketModal: (state) => {
      state.basketModal = true
      state.basketProduct.splice(0, state.basketProduct.length)
    },
    setCloseBasketModal: (state) => {
      state.basketModal = false
    },
    setDeleteBasketProduct: (state, action) => {
      state.basketProduct = state.basketProduct.filter(c => c.id !== action.payload)
    },
    setDisabled: (state, action) => {
      const existsInBasket = state.basketProduct.find(
        ({ id }) => state.product.id === id
      );
      state.disabled = existsInBasket
    }
  },
})

export const { setBasketProduct, setTotalPrice, setClearBasketProduct, setBasketModal, setCloseBasketModal, setDeleteBasketProduct, setDisabled } = basketSlice.actions

export default basketSlice.reducer