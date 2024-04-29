export interface ApiError extends Error{
	//status: "error"
	statusCode: number
}

export interface ApiValidationError extends Error {
	status: "error"
	errors: [string, string][]
}