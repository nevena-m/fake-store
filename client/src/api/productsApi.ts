import { createApi } from "@reduxjs/toolkit/query/react";
import fakeStoreBaseQuery from "./fakeStoreBaseQuery";
import { GetProductCategoriesResponse, GetProductsRequest, GetProductsResponse } from "../types/products";

const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fakeStoreBaseQuery,
    endpoints: (build) => ({
        getProducts: build.query<GetProductsResponse, GetProductsRequest>({
            query: (body) => ({
                url: 'product/filter',
                method: "POST",
                body
            })
        }),
        getProductCategories: build.query<GetProductCategoriesResponse, void>({
            query: () => 'product/categories'
        })
    }),
})

export const {
    useLazyGetProductsQuery,
    useGetProductCategoriesQuery
} = productsApi;

export default productsApi;