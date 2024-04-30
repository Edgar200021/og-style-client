import { BaseApiResponse } from '../../types/types.ts'
import { User } from '../user/types.ts'

export interface SignUpRequest {
  email: string
  password: string
}

export interface SignInRequest {
  email: string
  password: string
}

export interface GetGithubRedirectUrlResponse extends BaseApiResponse<string> {}
export interface SignInGithubRequest {
  code: string
}

export interface SignInGoogleRequest {
  token: string
}
export interface ResetPasswordRequest {
  email: string
  password: string
  token: string
}

export interface SignInResponse extends BaseApiResponse<User> {}
