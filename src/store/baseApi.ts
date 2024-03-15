import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError,} from '@reduxjs/toolkit/query/react'
import {Mutex} from 'async-mutex'
import {addUser, deleteUser} from './user/userSlice'
import  {User} from "./user/types.ts";

const mutex = new Mutex()

export const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:4000/api/v1',
	credentials: "include"
})

const customBaseQuery: BaseQueryFn<
		string | FetchArgs,
		unknown,
		FetchBaseQueryError
> = async (args, api, extraOptions) => {
	await mutex.waitForUnlock()
	let result = await baseQuery(args, api, extraOptions)


	if (result.error?.status === 401) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire()

			try {
				const refreshResult = await baseQuery(
						{url: '/auth/refresh-tokens'},
						api,
						extraOptions
				)

				if (refreshResult.error?.status === 403) {
					api.dispatch(deleteUser())
					window.location.href = '/auth/sign-in'
				}

				if (
						refreshResult.data &&
						typeof refreshResult.data === 'object' &&
						'user' in refreshResult.data
				) {

					api.dispatch(addUser(refreshResult.data.user as User))
					result = await baseQuery(args, api, extraOptions)
				} else {
					api.dispatch(deleteUser())
					window.location.href = '/auth/sign-in'
				}
			} finally {
				release()
			}
		} else {
			await mutex.waitForUnlock()
			result = await baseQuery(args, api, extraOptions)
		}
	}

	return result
}

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: customBaseQuery,
	endpoints: builder => ({}),
	tagTypes: ['cart', 'review']
})
