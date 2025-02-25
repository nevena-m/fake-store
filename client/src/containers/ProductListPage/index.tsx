import { useEffect } from "react";
import { useLazyGetProductsQuery } from "../../api/productsApi";
import Spinner from "../../commonComponents/Spinner";
import ProductCard from "../ProductCard";
import SearchProducts from "../SearchProducts";
import { ProductsFilter } from "../../types/products";

export default function ProductListPage() {

    const [triggerGetProducts, getProductsResponse] = useLazyGetProductsQuery();

    useEffect(() => {
        // on mount
        triggerGetProducts({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnSearch = (filter: ProductsFilter) => {
        triggerGetProducts(filter);
    }

    return (
        <div className="flex p-8 flex-col">
            <div className="flex flex-col">
                <SearchProducts onSearch={handleOnSearch} />
                {getProductsResponse?.data?.totalCount && <div className="flex m-auto mt-2">Total products: {getProductsResponse?.data?.totalCount}</div>}
            </div>
            <div className="flex flex-wrap gap-8 mt-4 ">
                {getProductsResponse.isLoading && <Spinner />}
                {
                    getProductsResponse
                        ?.data
                        ?.productList
                        ?.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}