import { SelectOption as SelectOptionType } from ".";

interface SelectOptionProps extends SelectOptionType {
    className?: string;
}

export default function SelectOption({ value, label, className = ''}: SelectOptionProps) {

    return (
        <option
            className={className}
            value={value}>
            {label}
        </option>
    )
}