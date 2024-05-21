import { baseApi } from '../baseApi'
import {
  AddCartProductRequest,
  AddCartProductResponse,
  DeleteCartProductRequest,
  DeleteCartProductResponse,
  GetCartProductsRequest,
  GetCartProductsResponse,
  UpdateCartProductRequest,
  UpdateCartProductResponse,
} from './types'

const cartApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCartProducts: builder.query<
      GetCartProductsResponse,
      GetCartProductsRequest
    >({
      query: params => ({
        url: '/cart',
        params,
      }),
      providesTags: ['cart'],
    }),

    addCartProduct: builder.mutation<
      AddCartProductResponse,
      AddCartProductRequest
    >({
      query: body => ({
        url: '/cart',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cart'],
    }),

    updateCartProduct: builder.mutation<
      UpdateCartProductResponse,
      UpdateCartProductRequest
    >({
      query: ({ cartProductId, quantity }) => ({
        url: `cart/${cartProductId}`,
        method: 'PATCH',
        body: { quantity },
      }),
      invalidatesTags: ['cart'],
    }),

    deleteCartProduct: builder.mutation<
      DeleteCartProductResponse,
      DeleteCartProductRequest
    >({
      query: ({ cartProductId }) => ({
        url: `cart/${cartProductId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
  }),
})

export const {
  useGetCartProductsQuery,
  useAddCartProductMutation,
  useUpdateCartProductMutation,
  useDeleteCartProductMutation,
} = cartApi
