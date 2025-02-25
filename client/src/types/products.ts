import { MessageDescription } from "./errors";
import { ResultSetOptions } from "./utilityTypes";

export interface ProductRating {
    rate: number;
    count: number;
}

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
}

export interface GetProductsResponse extends MessageDescription {
    productList: Product[];
    totalCount: number;
}

export interface ProductsFilter {
    categoryName?: string;
}

export type GetProductsRequest = Partial<ResultSetOptions> & ProductsFilter;

export type GetProductCategoriesResponse = string[] | MessageDescription;