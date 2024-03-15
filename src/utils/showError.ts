import {isApiError, isApiValidationError, isRtkResponse} from "./typeGuards.ts";
import {toast} from 'react-hot-toast'
export const showEerror = (err: unknown) => {

	if (isRtkResponse(err)) {
		if (isApiValidationError(err.data)) return
		if (isApiError(err.data) || err.data instanceof Error) {
			toast.error(err.data.message)
		}
	}
}