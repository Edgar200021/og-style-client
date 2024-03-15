import {baseApi} from "../baseApi.ts";
import {addUser} from "../user/userSlice.ts";
import {ResetPasswordRequest, SignInRequest, SignInResponse, SignUpRequst} from "./types.ts";
import {BaseApiResponse} from "../../types/types.ts";


export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		signUp: builder.mutation<BaseApiResponse<string>, SignUpRequst>({
			query: body => ({
				url: '/auth/sign-up',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body,
			})
		}),

		signIn: builder.mutation<SignInResponse, SignInRequest>({
			query: body => ({
				url: '/auth/sign-in',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body,
			}),
			async onQueryStarted(_, {dispatch, queryFulfilled}) {
				const {data} = await queryFulfilled
				dispatch(addUser(data.data))
			},
		}),

		forgotPassword: builder.mutation<BaseApiResponse<string>, Pick<SignInRequest, 'email'>>({
			query: body => ({
				url: '/auth/forgot-password',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body,
			})
		}),

		resetPassword: builder.mutation<BaseApiResponse<string>, ResetPasswordRequest>({
			query: ({email, password}) => ({
				url: `/auth/reset-password?email=${email}`,
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'PATCH',
				body: {password},
			})
		}),
	}),
})


export const {useSignUpMutation, useSignInMutation, useForgotPasswordMutation, useResetPasswordMutation} = authApi