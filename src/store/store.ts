import {  useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from './baseApi.ts'
import userReducer from './user/userSlice'
import productReducer from './product/productSlice.ts'

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		user: userReducer,
		product: productReducer
	},
	middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(baseApi.middleware),
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
