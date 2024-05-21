import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { deleteUser } from './user/userSlice'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000/api/v1',
  credentials: 'include',
  prepareHeaders: headers => {
    headers.set('Content-Type', 'application/json')
    return headers
  },
})

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    api.dispatch(deleteUser())
    window.location.href = '/auth/sign-in'
  } else {
    result = await baseQuery(args, api, extraOptions)
  }

  return result
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: customBaseQuery,
  endpoints: builder => ({}),
  tagTypes: ['cart', 'product'],
})
