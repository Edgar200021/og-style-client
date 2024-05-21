import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialState {
  totalPrice: number
  totalDiscountedPrice: number
}

const initialState: InitialState = {
  totalPrice: 0,
  totalDiscountedPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setInitialValues(
      state,
      {
        payload: { totalDiscountedPrice, totalPrice },
      }: PayloadAction<InitialState>
    ) {
      state.totalDiscountedPrice = totalDiscountedPrice
      state.totalPrice = totalPrice
    },

    increment(
      state,
      action: PayloadAction<{ price: number; discountedPrice: number | null }>
    ) {
      state.totalPrice += action.payload.price
      state.totalDiscountedPrice +=
        action.payload.discountedPrice ?? action.payload.price
    },

    decrement(
      state,
      action: PayloadAction<{ price: number; discountedPrice: number | null }>
    ) {
      state.totalPrice -= action.payload.price
      state.totalDiscountedPrice -=
        action.payload.discountedPrice ?? action.payload.price
    },
  },
  selectors: {
    getCartPriceInfo: state => state,
  },
})

export const { increment, decrement, setInitialValues } = cartSlice.actions
export const { getCartPriceInfo } = cartSlice.selectors
export default cartSlice.reducer
