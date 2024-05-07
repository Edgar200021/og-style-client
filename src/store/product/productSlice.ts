import { FAVORITE_PRODUCTS_KEY } from '@/constants/localStorage'
import { localStorageApi } from '@/utils/localStorage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './types'

const initialState: {
  favoriteProducts: Pick<
    Product,
    'id' | 'discount' | 'discountedPrice' | 'images' | 'name' | 'price'
  >[]
} = {
  favoriteProducts: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addFavoriteProduct(
      state,
      action: PayloadAction<
        Pick<
          Product,
          'id' | 'discount' | 'discountedPrice' | 'images' | 'name' | 'price'
        >
      >
    ) {
      const { set } = localStorageApi()

      const isExists = state.favoriteProducts.some(
        p => p.id == action.payload.id
      )

      if (!isExists) {
        state.favoriteProducts.push(action.payload)
      } else {
        state.favoriteProducts = state.favoriteProducts.filter(
          p => p.id !== action.payload.id
        )
      }

      set(FAVORITE_PRODUCTS_KEY, state.favoriteProducts)
    },

    addMultiple(
      state,
      action: PayloadAction<
        Pick<
          Product,
          'id' | 'discount' | 'discountedPrice' | 'images' | 'name' | 'price'
        >[]
      >
    ) {
      const { set } = localStorageApi()
      state.favoriteProducts = action.payload
      set(FAVORITE_PRODUCTS_KEY, state.favoriteProducts)
    },
  },
  selectors: {
    getFavoriteProduct(state, id: number) {
      return state.favoriteProducts.find(p => p.id == id)
    },
  },
})

export const { addFavoriteProduct, addMultiple } = productSlice.actions
export const { getFavoriteProduct } = productSlice.selectors
export default productSlice.reducer
