import { baseApi } from '../baseApi'
import {
  FilterProducts,
  GetProductFiltersResponse,
  GetProductResponse,
  GetProductsResponse,
  Product,
} from './types'

export const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<GetProductsResponse, Partial<FilterProducts>>({
      query: params => ({
        url: '/products',
        params,
      }),
    }),

    getProduct: builder.query<GetProductResponse, number>({
      query: id => ({
        url: `/products/${id}`,
      }),
    }),

    getProductFilters: builder.query<
      GetProductFiltersResponse,
      Product['category']
    >({
      query: category => ({
        url: `/products/filters?category=${category}`,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductFiltersQuery,
} = productApi
