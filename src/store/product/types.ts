import { BaseApiResponse, BaseSearchParams } from '../../types/types'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  discountedPrice?: number
  discount?: number
  category: 'обувь' | 'одежда'
  subCategory: string
  materials: string[]
  colors: string[]
  images: string[]
  size: string[]
  brandId: number
}

export interface ProductWithBrand extends Product {
  brand: string
}

export interface GetProductsResponse
  extends BaseApiResponse<{ totalPages: number; products: Product[] }> {}
export interface FilterProducts extends BaseSearchParams {
  name: string
  category: string
  subCategory: string
  brand: string
  size: string
  colors: string
  minPrice: string
  maxPrice: string
  search: string
}

export interface GetProductResponse extends BaseApiResponse<ProductWithBrand> {}
export interface GetProductRequest {
  id: Product['id']
}

export interface ProductFilters {
  size: string[]
  colors: string[]
  min_price: number
  max_price: number
  brands: string[]
}

export interface GetProductFiltersResponse
  extends BaseApiResponse<ProductFilters> {}
