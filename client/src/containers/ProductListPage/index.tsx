import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { useEffect, useMemo } from "react"
import { useLazyGetProductsQuery } from "../../api/productsApi"
import Spinner from "../../commonComponents/Spinner"
import { MessageDescription } from "../../types/errors"
import { ProductsFilter } from "../../types/products"
import ProductCard from "../ProductCard"
import SearchProducts from "../SearchProducts"

export default function ProductListPage() {
	const [triggerGetProducts, getProductsResponse] = useLazyGetProductsQuery()

	useEffect(() => {
		// on mount
		triggerGetProducts({})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleOnSearch = (filter: ProductsFilter) => {
		triggerGetProducts(filter)
	}

	const errorMessage = useMemo(() => {
		const errorDesc = (
			(getProductsResponse?.error as FetchBaseQueryError)
				?.data as MessageDescription
		)?.description

		return errorDesc
	}, [getProductsResponse?.error])

	return (
		<div className="flex p-8 flex-col">
			{errorMessage && (
				<div className="flex bg-red-300 p-3 text-center mb-3">
					{errorMessage}
				</div>
			)}
			<div className="flex flex-col">
				<SearchProducts onSearch={handleOnSearch} />
				{getProductsResponse?.data?.totalCount && (
					<div className="flex m-auto mt-2">
						Total products: {getProductsResponse?.data?.totalCount}
					</div>
				)}
			</div>
			<div className="flex flex-wrap gap-8 mt-4 ">
				{getProductsResponse.isLoading && <Spinner />}
				{getProductsResponse?.data?.productList?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}
