import { PropsWithChildren } from "react";

interface TextCardWrapperProps {
    className?: string;
}

export default function TextCardWrapper({ children, className = '' }: PropsWithChildren<TextCardWrapperProps>) {
    return (
        <div className={`flex flex-wrap p-5 ${className}`}>
            {children}
        </div>
    );
}