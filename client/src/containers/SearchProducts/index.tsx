import { useMemo, useState } from "react";
import { useGetProductCategoriesQuery } from "../../api/productsApi";
import Select, { SelectOption } from "../../commonComponents/Select";
import { ProductsFilter } from "../../types/products";

interface SearchProductsProps {
    onSearch: (filter: ProductsFilter) => void;
}

export default function SearchProducts({
    onSearch
}: SearchProductsProps) {

    const [currentValue, setCurrentValue] = useState(null);
    
    const {
        isLoading,
        data: categories,
        isError,
    } = useGetProductCategoriesQuery();

    const handleSelectCategory = (value) => {
        setCurrentValue(value);
        onSearch({
            categoryName: value
        });
    }

    const categorySelectOptions = useMemo<SelectOption[]>(() => {
        return Array.isArray(categories) ? categories.map(name => ({ label: name, value: name })) : []
    }, [categories]);

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