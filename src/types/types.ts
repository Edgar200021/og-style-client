export interface BaseApiResponse<T> {
  status: string
  data: T
}

export interface RtkApiResponse {
  status: number
  data: any
}

export interface BaseSearchParams {
  page?: number | string
  limit?: number | string
}
