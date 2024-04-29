import { ApiError, ApiValidationError } from '../types/error.ts'
import { RtkApiResponse } from '../types/types.ts'

export const isApiError = (error: unknown): error is ApiError => {
//  return (error as ApiError).status !== undefined
return (error as ApiError).statusCode !== undefined

}

export const isApiValidationError = (
  error: unknown
): error is ApiValidationError => {
  return (error as ApiValidationError).errors !== undefined
}

export const isRtkResponse = (data: unknown): data is RtkApiResponse => {
  return (data as RtkApiResponse).status !== undefined
}
