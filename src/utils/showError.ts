import { toast } from 'react-hot-toast'
import {
  isApiError,
  isApiValidationError,
  isRtkResponse,
} from './typeGuards.ts'
export const showError = (err: unknown) => {
  if (isRtkResponse(err)) {
    if (isApiValidationError(err.data)) return
    if (isApiError(err.data) || err.data instanceof Error) {
      console.log(err.data.message)
      toast.error(err.data.message)
    }
  }
}
