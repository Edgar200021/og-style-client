export interface BaseApiResponse<T> {
  status: string
  data: T
}
AuthenticatorAttestationResponse
export interface RtkApiResponse {
  status: number
  data: any
}

export interface BaseSearchParams {
  page?: number
  limit?: number
}
