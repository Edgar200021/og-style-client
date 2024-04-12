import { baseApi } from '../baseApi'
import {
  FilterProducts,
  GetProductRequest,
  GetProductResponse,
  GetProductsResponse,
} from './types'

export const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<GetProductsResponse, Partial<FilterProducts>>({
      query: params => ({
        url: '/products',
        params,
      }),
    }),

    getProduct: builder.query<GetProductResponse, GetProductRequest>({
      query: id => ({
        url: `/products/${id}`,
      }),
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery } = productApi
