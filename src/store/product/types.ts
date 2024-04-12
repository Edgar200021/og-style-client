import { BaseApiResponse, BaseSearchParams } from "../../types/types";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  discount?: number;
  images: string[];
  size: string[];
  category: "обувь" | "одежда";
  subCategory: string;
  materials: string[];
  colors: string[];
}

export interface GetProductsResponse extends BaseApiResponse<Product[]> {}
export interface FilterProducts extends BaseSearchParams {
  name: string;
  category: string;
  subCategory: string;
  brand: number;
  size: string[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
}


export interface GetProductResponse extends BaseApiResponse<Product>{}
export interface GetProductRequest {id: Product["id"]} 
