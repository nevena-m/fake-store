import { ChangeEvent } from "react";
import SelectOption from "./SelectOption";

type SelectOptionValueType = number | string;

export interface SelectOption {
    label: string;
    value: SelectOptionValueType;
}

interface SelectProps {
    selectedValue: SelectOptionValueType;
    options: SelectOption[];
    onChange: (option: SelectOptionValueType) => void;
    isLoading: boolean;
    isError: boolean;
}

export default function Select({
    onChange,
    isLoading,
    isError,
    options,
}: SelectProps) {

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.currentTarget.value);
    }

    return (
        <select
            onChange={handleChange}
            className="border-2 p-0.5 focus:outline-0 focus-visible:outline-0 focus:border-blue-300 border-blue-200 m-auto min-w-1/2 max-sm:min-w-full"
        >
            {options.length && <SelectOption label="Select category" value="choose" />}
            {isLoading ? <SelectOption label="Loading..." value={"loading"} /> :
                (
                    options
                        ?.map(({ value, label }) => (
                            <SelectOption key={value} value={value} label={label} />
                        ))
                )}
            {isError
                && options.length === 0
                && <SelectOption label={"error"} value="Couldn't load options..." />}
        </select>
    )
}