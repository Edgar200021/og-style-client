export interface ApiError extends Error{
	status: "error"
}

export interface ApiValidationError extends Error {
	status: "error"
	errors: [string, string][]
}