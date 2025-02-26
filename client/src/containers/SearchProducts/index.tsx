import { useMemo, useState } from "react"
import { useGetProductCategoriesQuery } from "../../api/productsApi"
import Select, { SelectOption } from "../../commonComponents/Select"
import { ProductsFilter } from "../../types/products"

const ALL_CATEGORIES: string = "ALL_CATEGORIES" as const

interface SearchProductsProps {
	onSearch: (filter: ProductsFilter) => void
}

const defaultCategoryOptions = [
	{ label: "All Categories", value: ALL_CATEGORIES },
]

export default function SearchProducts({
	onSearch,
}: SearchProductsProps) {
	const [currentValue, setCurrentValue] = useState(null)

	const {
		isLoading,
		data: categories,
		isError,
	} = useGetProductCategoriesQuery()

	const handleSelectCategory = (value) => {
		const newValue = value === ALL_CATEGORIES ? null : value
		setCurrentValue(newValue)
		onSearch({
			categoryName: newValue,
		})
	}

	const categorySelectOptions = useMemo<SelectOption[]>(() => {
		return Array.isArray(categories)
			? defaultCategoryOptions
					.slice()
					.concat(categories.map((name) => ({ label: name, value: name })))
			: defaultCategoryOptions
	}, [categories])

	return (
		<Select
			onChange={handleSelectCategory}
			isError={isError}
			isLoading={isLoading}
			options={categorySelectOptions}
			selectedValue={currentValue}
		/>
	)
}
