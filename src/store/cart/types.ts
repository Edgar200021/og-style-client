import { BaseApiResponse, BaseSearchParams } from '@/types/types'

export interface CartProduct {
  id: number
  productId: number
  quantity: number
  size: string
  color: string
  name: string
  images: string[]
  price: number
  discountedPrice: number | null
}

export interface GetCartProductsResponse
  extends BaseApiResponse<{
    products: CartProduct[]
    totalPages: number
    totalPrice: number
    totalDiscountedPrice: number
  }> {}
export interface GetCartProductsRequest extends BaseSearchParams {}

export interface AddCartProductResponse extends BaseApiResponse<string> {}
export interface AddCartProductRequest {
  productId: number
  size: string
  color: string
  quantity?: number
}

export interface UpdateCartProductResponse extends BaseApiResponse<string> {}
export interface UpdateCartProductRequest {
  cartProductId: number
  quantity: number
}

export interface DeleteCartProductResponse extends BaseApiResponse<string> {}
export interface DeleteCartProductRequest {
  cartProductId: number
}
