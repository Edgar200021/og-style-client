import { BaseApiResponse } from '../../types/types.ts'
import { baseApi } from '../baseApi.ts'
import { addUser } from '../user/userSlice.ts'
import {
  GetGithubRedirectUrlResponse,
  ResetPasswordRequest,
  SignInGithubRequest,
  SignInGoogleRequest,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
} from './types.ts'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<BaseApiResponse<string>, SignUpRequest>({
      query: body => ({
        url: '/auth/sign-up',

        method: 'POST',
        body,
      }),
    }),

    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: body => ({
        url: '/auth/sign-in',

        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
        dispatch(addUser(data.data))
      },
    }),

    getGithubRedirectUrl: builder.query<GetGithubRedirectUrlResponse, null>({
      query: () => ({
        url: '/auth/github',
      }),
    }),

    signInGithub: builder.mutation<string, SignInGithubRequest>({
      query: body => ({
        url: '/auth/github',

        method: 'POST',
        body,
      }),
      //  async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //    const { data } = await queryFulfilled
      //    dispatch(addUser(data.data))
      //  },
    }),

    signInGoogle: builder.mutation<SignInResponse, SignInGoogleRequest>({
      query: body => ({
        url: '/auth/google',

        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
        dispatch(addUser(data.data))
      },
    }),

    logout: builder.mutation<BaseApiResponse<string>, null>({
      query: body => ({
        url: '/auth/logout',

        method: 'POST',
        body,
      }),
    }),

    forgotPassword: builder.mutation<
      BaseApiResponse<string>,
      Pick<SignInRequest, 'email'>
    >({
      query: body => ({
        url: '/auth/forgot-password',

        method: 'POST',
        body,
      }),
    }),

    resetPassword: builder.mutation<
      BaseApiResponse<string>,
      ResetPasswordRequest
    >({
      query: ({ email, password, token }) => ({
        url: `/auth/reset-password`,

        method: 'PATCH',
        body: { password, email, token },
      }),
    }),
  }),
})

export const {
  useSignUpMutation,
  useSignInMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetGithubRedirectUrlQuery,
  useSignInGoogleMutation,
  useSignInGithubMutation,
  useLazyGetGithubRedirectUrlQuery,
} = authApi
