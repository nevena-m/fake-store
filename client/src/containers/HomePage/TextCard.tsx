import { PropsWithChildren } from "react";

interface TextCardProps {
    className?: string;
}

export default function TextCard({ children, className = '' }: PropsWithChildren<TextCardProps>) {
    return (
        <div className={`min-md:flex-2/3 min-md:text-end max-md:text-center ${className}`}>
            {children}
        </div>
    );
}