export interface BaseApiResponse<T> {
	status: string
	data: T
}

export interface RtkApiResponse {
	status: number,
	data: any
}